import re, ast
from flask import request, jsonify, g


from apps.authentication import blueprint
from apps.authentication.mysqls import db_connector, db_connectors, db_asos_connector, db_station_connectors, db_stack_connectors
from apps.authentication import mysqls


@blueprint.route('/init_func', methods=['GET', 'POST'])
def init_func():
    if request.method == 'POST':
        data = request.get_json()

        # print(data['amdCode'])
        
        sql1 = f"""
        SELECT LOCAL_CD, COUNT(LOCAL_CD) FROM {data['name'].upper()}_BUG GROUP BY LOCAL_CD ORDER BY COUNT(LOCAL_CD) DESC LIMIT 5;
        """
        sql2 = f"""
        SELECT LEFT(EXMNN_OTST, 4), COUNT(*) FROM {data['name'].upper()}_BUG GROUP BY LEFT(EXMNN_OTST, 4) ORDER BY LEFT(EXMNN_OTST, 4) ASC;
        """

        sql3 = f"""
        SELECT COUNT(*) FROM {data['name'].upper()}_BUG;
        """

        sql4 = f"""
        SELECT AMDCODE, JUSO FROM PROHIBIT_AREA WHERE AMDCODE LIKE "{str(data['amdCode'])[:2]}%";
        """

        sql5 = f"""
        SELECT * FROM {data['name'].upper()}_SAFE ORDER BY PROB DESC;
        """


        r1 = db_connector(sql1)
        r2 = db_connector(sql2)
        r3 = db_connector(sql3)
        r4 = db_connector(sql4)
        r5 = db_connector(sql5)


        p = re.compile(r'[^\w\s]')
        output1 = p.sub('', r1).lstrip().split(' ')
        output2 = p.sub('', r2).lstrip().split(' ')
        output3 = p.sub('', r3).lstrip().split(' ')
        output4 = ast.literal_eval(r4)
        output5 = ast.literal_eval(r5)

        result = {}
        result['localName'] = data['name']
        result['localValue'] = []
        result['yearValue'] = []
        result['totalCount'] = output3[0]
        result['prohibitArea'] = []
        result['safe'] = []
        
        for x in range(len(output1)):
            dict_list = {}
            if not (x & 1):
                name = g.legal[str(output1[x])]
                dict_list['name'] = name
                dict_list['value'] = str(output1[x+1])
                result['localValue'].append(dict_list)
        
        year_seq = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]
        year_cnt = 0    
        for x in range(len(output2)):
            dict_list = {}

            if not (x & 1):
                if str(output2[x]) == year_seq[year_cnt]:
                    year_cnt += 1
                    dict_list['name'] = str(output2[x])
                    dict_list['value'] = str(output2[x+1])
                    result['yearValue'].append(dict_list)
                else:
                    dict_list['name'] = year_seq[year_cnt]
                    dict_list['value'] = -1
                    year_cnt += 1
                    result['yearValue'].append(dict_list)

        for x in output4:
            print(x) 
            dict_list = {}
            dict_list['amdCode'] = x[0]
            dict_list['value'] = x[1]
            result['prohibitArea'].append(dict_list)

        prob_sum = 0
        for x in output5:
            dict_list = {}
            # dict_list['STORUNST'] = x[1]
            # dict_list['FROR_CD'] = x[2]
            # dict_list['FRTP_CD'] = x[3]
            # dict_list['KOFTR_GROU'] = x[4]
            dict_list['PROB'] = x[5]
            result['safe'].append(dict_list)
            prob_sum += float(x[5])

        result['prob_avg'] = prob_sum/len(output5)

    return jsonify(result)


@blueprint.route('/type0_func', methods=['GET', 'POST'])
def type0_func():
    if request.method == 'POST':
        data = request.get_json()
        print(data)

        # print(data['amdCode'])
        
        sql1 = f"""
        SELECT LOCAL_CD, COUNT(LOCAL_CD) FROM {data['name'].upper()}_BUG GROUP BY LOCAL_CD ORDER BY COUNT(LOCAL_CD) DESC LIMIT 5;
        """
        sql2 = f"""
        SELECT LEFT(EXMNN_OTST, 4), COUNT(*) FROM {data['name'].upper()}_BUG GROUP BY LEFT(EXMNN_OTST, 4) ORDER BY LEFT(EXMNN_OTST, 4) ASC;
        """

        sql3 = f"""
        SELECT COUNT(*) FROM {data['name'].upper()}_BUG;
        """

        sql4 = f"""
        SELECT AMDCODE, JUSO FROM PROHIBIT_AREA WHERE AMDCODE LIKE "{str(data['amdcode'])[:2]}%";
        """

        sql5 = f"""
        SELECT * FROM {data['name'].upper()}_SAFE ORDER BY PROB DESC;
        """


        r1 = db_connector(sql1)
        r2 = db_connector(sql2)
        r3 = db_connector(sql3)
        r4 = db_connector(sql4)
        r5 = db_connector(sql5)
        
        p = re.compile(r'[^\w\s]')
        output1 = p.sub('', r1).lstrip().split(' ')
        output2 = p.sub('', r2).lstrip().split(' ')
        output3 = p.sub('', r3).lstrip().split(' ')
        output4 = ast.literal_eval(r4)
        output5 = ast.literal_eval(r5)

        result = {}
        result['localName'] = data['name']
        result['localValue'] = []
        result['yearValue'] = []
        result['totalCount'] = output3[0]
        result['prohibitArea'] = []
        result['safe'] = []
        
        for x in range(len(output1)):
            dict_list = {}
            if not (x & 1):
                name = g.legal[str(output1[x])]
                dict_list['name'] = name
                dict_list['value'] = str(output1[x+1])
                result['localValue'].append(dict_list)
        
        year_seq = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]
        year_cnt = 0    
        for x in range(len(output2)):
            dict_list = {}

            if not (x & 1):
                if str(output2[x]) == year_seq[year_cnt]:
                    year_cnt += 1
                    dict_list['name'] = str(output2[x])
                    dict_list['value'] = str(output2[x+1])
                    result['yearValue'].append(dict_list)
                else:
                    dict_list['name'] = year_seq[year_cnt]
                    dict_list['value'] = -1
                    year_cnt += 1
                    result['yearValue'].append(dict_list)

        for x in output4:
            # print(x) 
            dict_list = {}
            dict_list['amdCode'] = x[0]
            dict_list['value'] = x[1]
            result['prohibitArea'].append(dict_list)

        prob_sum = 0
        for x in output5:
            dict_list = {}
            # dict_list['STORUNST'] = x[1]
            # dict_list['FROR_CD'] = x[2]
            # dict_list['FRTP_CD'] = x[3]
            # dict_list['KOFTR_GROU'] = x[4]
            dict_list['PROB'] = x[5]
            result['safe'].append(dict_list)
            prob_sum += float(x[5])

        result['prob_avg'] = prob_sum/len(output5)
    return jsonify(result)

@blueprint.route('/type1_func', methods=['GET', 'POST'])
def type1_func():
    if request.method == 'POST':
        data = request.get_json()

        # print(data['amdCode'])
        
        sql1 = f"""
        SELECT LOCAL_CD, COUNT(LOCAL_CD) FROM {data['name'].upper()}_BUG GROUP BY LOCAL_CD ORDER BY COUNT(LOCAL_CD) DESC LIMIT 5;
        """
        sql2 = f"""
        SELECT LEFT(EXMNN_OTST, 4), COUNT(*) FROM {data['name'].upper()}_BUG GROUP BY LEFT(EXMNN_OTST, 4) ORDER BY LEFT(EXMNN_OTST, 4) ASC;
        """

        sql3 = f"""
        SELECT COUNT(*) FROM {data['name'].upper()}_BUG;
        """

        r1 = db_connector(sql1)
        r2 = db_connector(sql2)
        r3 = db_connector(sql3)
        
        p = re.compile(r'[^\w\s]')
        output1 = p.sub('', r1).lstrip().split(' ')
        output2 = p.sub('', r2).lstrip().split(' ')
        output3 = p.sub('', r3).lstrip().split(' ')


        result = {}
        result['localName'] = data['name']
        result['localValue'] = []
        result['yearValue'] = []
        result['totalCount'] = output3[0]
        
        for x in range(len(output1)):
            dict_list = {}
            if not (x & 1):
                name = g.legal[str(output1[x])]
                dict_list['name'] = name
                dict_list['value'] = str(output1[x+1])
                result['localValue'].append(dict_list)
        
        year_seq = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]
        year_cnt = 0    
        for x in range(len(output2)):
            dict_list = {}

            if not (x & 1):
                if str(output2[x]) == year_seq[year_cnt]:
                    year_cnt += 1
                    dict_list['name'] = str(output2[x])
                    dict_list['value'] = str(output2[x+1])
                    result['yearValue'].append(dict_list)
                else:
                    dict_list['name'] = year_seq[year_cnt]
                    dict_list['value'] = -1
                    year_cnt += 1
                    result['yearValue'].append(dict_list)
    return jsonify(result)

@blueprint.route('/map_json', methods=['GET', 'POST'])
def map_json():

    if request.method == 'POST':
        data = request.get_json()
        name = data['name']
    print(name)
    return jsonify(name)
