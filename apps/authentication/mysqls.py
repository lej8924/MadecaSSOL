import pymysql

bug_columns = [
    'STORUNST','FROR_CD','FRTP_CD','KOFTR_GROU', 'DMCLS_CD',
    'AGCLS_CD', 'DNST_CD','HEIGHT']

asos_columns = [
            "STATION_ID","STATION_NAME","LATITUDE","LONGITUDE","CSS_AVG_01","MIN_CSS_AVG_01","MAX_CSS_AVG_01","MAX_IWS_DEG_01",\
            "MAX_WS_MS_01","MAX_WS_DEG_01","WS_AVG_MS_01","MAX_WO_DEG_01","CSS_DEW_AVG_01","MIN_REL_HUMID_01","REL_HUMID_AVG_01","VAPOR_AVG_01","VAPOR_LOCAL_AVG_01","PDOS_HR_01","CSS_GRD_AVG_01","MIN_CSS_GRD_01","CSS_AVG_02","MIN_CSS_AVG_02","MAX_CSS_AVG_02",\
            "MAX_IWS_DEG_02","MAX_WS_MS_02","MAX_WS_DEG_02","WS_AVG_MS_02","MAX_WO_DEG_02","CSS_DEW_AVG_02","MIN_REL_HUMID_02","REL_HUMID_AVG_02","VAPOR_AVG_02","VAPOR_LOCAL_AVG_02","PDOS_HR_02","CSS_GRD_AVG_02","MIN_CSS_GRD_02","CSS_AVG_03","MIN_CSS_AVG_03","MAX_CSS_AVG_03","MAX_IWS_DEG_03","MAX_WS_MS_03","MAX_WS_DEG_03","WS_AVG_MS_03","MAX_WO_DEG_03","CSS_DEW_AVG_03","MIN_REL_HUMID_03",\
            "REL_HUMID_AVG_03","VAPOR_AVG_03","VAPOR_LOCAL_AVG_03","PDOS_HR_03","CSS_GRD_AVG_03","MIN_CSS_GRD_03","CSS_AVG_04","MIN_CSS_AVG_04","MAX_CSS_AVG_04","MAX_IWS_DEG_04","MAX_WS_MS_04","MAX_WS_DEG_04","WS_AVG_MS_04","MAX_WO_DEG_04","CSS_DEW_AVG_04","MIN_REL_HUMID_04","REL_HUMID_AVG_04","VAPOR_AVG_04","VAPOR_LOCAL_AVG_04","PDOS_HR_04","CSS_GRD_AVG_04","MIN_CSS_GRD_04","CSS_AVG_05","MIN_CSS_AVG_05","MAX_CSS_AVG_05",\
            "MAX_IWS_DEG_05","MAX_WS_MS_05","MAX_WS_DEG_05","WS_AVG_MS_05","MAX_WO_DEG_05","CSS_DEW_AVG_05","MIN_REL_HUMID_05","REL_HUMID_AVG_05","VAPOR_AVG_05","VAPOR_LOCAL_AVG_05","PDOS_HR_05","CSS_GRD_AVG_05","MIN_CSS_GRD_05","CSS_AVG_06","MIN_CSS_AVG_06","MAX_CSS_AVG_06","MAX_IWS_DEG_06","MAX_WS_MS_06","MAX_WS_DEG_06","WS_AVG_MS_06","MAX_WO_DEG_06","CSS_DEW_AVG_06",\
            "MIN_REL_HUMID_06","REL_HUMID_AVG_06","VAPOR_AVG_06","VAPOR_LOCAL_AVG_06","PDOS_HR_06","CSS_GRD_AVG_06","MIN_CSS_GRD_06","CSS_AVG_07","MIN_CSS_AVG_07","MAX_CSS_AVG_07","MAX_IWS_DEG_07","MAX_WS_MS_07","MAX_WS_DEG_07","WS_AVG_MS_07","MAX_WO_DEG_07","CSS_DEW_AVG_07","MIN_REL_HUMID_07","REL_HUMID_AVG_07",\
            "VAPOR_AVG_07","VAPOR_LOCAL_AVG_07","PDOS_HR_07","CSS_GRD_AVG_07","MIN_CSS_GRD_07","CSS_AVG_08","MIN_CSS_AVG_08","MAX_CSS_AVG_08","MAX_IWS_DEG_08","MAX_WS_MS_08","MAX_WS_DEG_08","WS_AVG_MS_08","MAX_WO_DEG_08","CSS_DEW_AVG_08","MIN_REL_HUMID_08","REL_HUMID_AVG_08","VAPOR_AVG_08","VAPOR_LOCAL_AVG_08","PDOS_HR_08",\
            "CSS_GRD_AVG_08","MIN_CSS_GRD_08","CSS_AVG_09","MIN_CSS_AVG_09","MAX_CSS_AVG_09","MAX_IWS_DEG_09","MAX_WS_MS_09","MAX_WS_DEG_09","WS_AVG_MS_09","MAX_WO_DEG_09","CSS_DEW_AVG_09","MIN_REL_HUMID_09","REL_HUMID_AVG_09","VAPOR_AVG_09","VAPOR_LOCAL_AVG_09",\
            "PDOS_HR_09","CSS_GRD_AVG_09","MIN_CSS_GRD_09","CSS_AVG_10","MIN_CSS_AVG_10","MAX_CSS_AVG_10","MAX_IWS_DEG_10","MAX_WS_MS_10","MAX_WS_DEG_10","WS_AVG_MS_10","MAX_WO_DEG_10","CSS_DEW_AVG_10","MIN_REL_HUMID_10","REL_HUMID_AVG_10","VAPOR_AVG_10","VAPOR_LOCAL_AVG_10","PDOS_HR_10","CSS_GRD_AVG_10","MIN_CSS_GRD_10",\
            "CSS_AVG_11","MIN_CSS_AVG_11","MAX_CSS_AVG_11","MAX_IWS_DEG_11","MAX_WS_MS_11","MAX_WS_DEG_11","WS_AVG_MS_11","MAX_WO_DEG_11","CSS_DEW_AVG_11","MIN_REL_HUMID_11","REL_HUMID_AVG_11","VAPOR_AVG_11","VAPOR_LOCAL_AVG_11","PDOS_HR_11","CSS_GRD_AVG_11","MIN_CSS_GRD_11","CSS_AVG_12",\
            "MIN_CSS_AVG_12","MAX_CSS_AVG_12","MAX_IWS_DEG_12","MAX_WS_MS_12","MAX_WS_DEG_12","WS_AVG_MS_12","MAX_WO_DEG_12","CSS_DEW_AVG_12","MIN_REL_HUMID_12","REL_HUMID_AVG_12","VAPOR_AVG_12","VAPOR_LOCAL_AVG_12","PDOS_HR_12","CSS_GRD_AVG_12","MIN_CSS_GRD_12","RF_AVG_01","RF_AVG_02","RF_AVG_03","RF_AVG_04","RF_AVG_05",\
            "RF_AVG_06","RF_AVG_07","RF_AVG_08","RF_AVG_09","RF_AVG_10","RF_AVG_11","RF_AVG_12","AWS_STATION_ID"]


def db_connector(sql):
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='1234', db='test', charset='utf8')
    cursor = db.cursor()
    cursor.execute(sql)
    result = cursor.fetchall()
    db.close()
    return str(result)


def db_asos_connector(sqls):
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='1234', db='test', charset='utf8')
    cursor = db.cursor()
    results = []
    for sql in sqls:
        result = {}
        cursor.execute(sql)
        temp_result = cursor.fetchall()
        for s, c in zip(temp_result[0], asos_columns):
            result[c] = s
        results.append(result)
    db.close()
    return results



def db_connectors(sqls):
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='1234', db='test', charset='utf8')
    cursor = db.cursor()
    results = {
        "localName": '',
    }
    for col in bug_columns:
        results[col] = []

    for sql, col in zip(sqls, bug_columns):
        print(sql) #debug
        cursor.execute(sql)
        result = cursor.fetchall()
        for r in result:
            results[col].append({
                "name": r[0],
                "value": r[1]})
    db.close()
    return results

def db_station_connectors(sqls):
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='1234', db='test', charset='utf8')
    cursor = db.cursor()
    results = {
        "STATION_ID": []
    }

    for sql in sqls:
        print(sql) #debug
        cursor.execute(sql)
        result = cursor.fetchall()
        print(result)
        test = {
            'id': result[0][0]
        }
        results['STATION_ID'].append(test)
    db.close()
    return results


def db_stack_connectors(sqls):
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='1234', db='test', charset='utf8')
    
    cursor = db.cursor()
    results = {}

    for idx,sql in enumerate(sqls):

        cursor.execute(sql)
        result = cursor.fetchall()
        results[str(idx+2013)] = []
        for s in result:
            temp = {
                "LOCAL_CD": s[0],
                "COUNT": s[1]
            }
            results[str(idx+2013)].append(temp)

    return results  


def db_email_check(sqls):
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='1234', db='test', charset='utf8')
    cursor = db.cursor()
    results = {}
    for sql in sqls:
        print(sql) 
        cursor.execute(sql)
        result = cursor.fetchall()
        results.append(result)

    return results