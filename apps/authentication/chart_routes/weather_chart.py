import re
from flask import request, jsonify, g


from apps.authentication import blueprint
from apps.authentication.mysqls import db_connector, db_connectors, db_asos_connector, db_station_connectors, db_stack_connectors
from apps.authentication import mysqls

@blueprint.route('/weather_bug_occ', methods=['GET', 'POST'])
def weather_bug_occ():

    if request.method == 'POST':
        data = request.get_json()

        name = data['name'].upper()
        
        fst_sqls = []

        fst_sqls.append(f"""
        SELECT STATION_ID FROM {name}_BUG WHERE STATION_ID NOT IN (-1, "-1") GROUP BY STATION_ID ORDER BY COUNT(*) DESC LIMIT 1;""")
        fst_sqls.append(f"""
        SELECT STATION_ID FROM {name}_BUG WHERE STATION_ID NOT IN (-1, "-1") GROUP BY STATION_ID ORDER BY COUNT(*) LIMIT 1;""")
            
    result = db_station_connectors(fst_sqls)
    result["localName"] = str(name)

    print(result)

    fst_sqls[0] = f"""
    SELECT * FROM ASOS WHERE STATION_ID = {result['STATION_ID'][0]['id']};"""
    fst_sqls[1] = f"""
    SELECT * FROM ASOS WHERE STATION_ID = {result['STATION_ID'][1]['id']};"""
    
    result['ASOS_STATION'] = db_asos_connector(fst_sqls)
  
    print(result)
    return jsonify(result)
