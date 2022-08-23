import re
from flask import request, jsonify, g


from apps.authentication import blueprint
from apps.authentication.mysqls import db_connector, db_connectors, db_asos_connector, db_station_connectors, db_stack_connectors
from apps.authentication import mysqls

@blueprint.route('/imsang_bug_occ', methods=['GET', 'POST'])
def imsang_bug_occ():

    bug_columns = [
        'STORUNST','FROR_CD','FRTP_CD','KOFTR_GROU', 'DMCLS_CD',
        'AGCLS_CD', 'DNST_CD','HEIGHT']

    if request.method == 'POST':
        data = request.get_json()

        name = data['name'].upper()
        
        fst_sqls = []

        for column in bug_columns:
            fst_sqls.append(f"""
                SELECT {column}, COUNT(*) FROM {name}_BUG WHERE {column} NOT IN (-1, "-1") GROUP BY {column} ORDER BY COUNT(*) DESC LIMIT {g.limit};""")
        result = db_connectors(fst_sqls)
        result["localName"] = str(name)

    return jsonify(result)


