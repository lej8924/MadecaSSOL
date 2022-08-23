import re
from flask import request, jsonify, g


from apps.authentication import blueprint
from apps.authentication.mysqls import db_connector, db_connectors, db_asos_connector, db_station_connectors, db_stack_connectors
from apps.authentication import mysqls

@blueprint.route('/stack_bug_occ', methods=['GET', 'POST'])
def stack_bug_occ():

    if request.method == 'POST':
        data = request.get_json()

        name = data['name'].upper()
        
        fst_sqls = []

        for i in range(2010, 2022):
            fst_sqls.append(f"""
            SELECT  LOCAL_CD, COUNT(*) FROM {name}_BUG WHERE EXMNN_OTST LIKE "%{i}%" GROUP BY LOCAL_CD ORDER BY COUNT(*) DESC;""")
        
        result = db_stack_connectors(fst_sqls)
        print(result)

    print(result)
    return jsonify(result)

