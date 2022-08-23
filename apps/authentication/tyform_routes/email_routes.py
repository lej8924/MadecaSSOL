import re
from flask import request, jsonify, g


from apps.authentication import blueprint
from apps.authentication.mysqls import db_email_check
from apps.authentication import mysqls

@blueprint.route('/send_email', methods=['GET', 'POST'])
def send_email():

    if request.method == 'POST':
        data = request.get_json()

        email = data['email']
        
        sqls = []

        sqls.append(f"""
            SELECT email from Prices where email='{email}';""")
        sqls.append(f"""
            SELECT email from Users where email='{email}';""")
        result = db_email_check(sqls)
        print(result)

    return jsonify(result)


