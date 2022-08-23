function morris_call(rsponse){
    Morris.Line({
        element: 'morris-line-smooth-chart1',
        data: [             
            {
                y: 1,
                a: response['ASOS_STATION'][0]['CSS_AVG_01'],
                b: response['ASOS_STATION'][1]['CSS_AVG_01']
            },
            {
                y: 2,
                a: response['ASOS_STATION'][0]['CSS_AVG_02'],
                b: response['ASOS_STATION'][1]['CSS_AVG_02']
            },
            {
                y: 3,
                a: response['ASOS_STATION'][0]['CSS_AVG_03'],
                b: response['ASOS_STATION'][1]['CSS_AVG_03']
            },
            {
                y: 4,
                a: response['ASOS_STATION'][0]['CSS_AVG_04'],
                b: response['ASOS_STATION'][1]['CSS_AVG_04']
            },
            {
                y: 5,
                a: response['ASOS_STATION'][0]['CSS_AVG_05'],
                b: response['ASOS_STATION'][1]['CSS_AVG_05']
            },
            {
                y: 6,
                a: response['ASOS_STATION'][0]['CSS_AVG_06'],
                b: response['ASOS_STATION'][1]['CSS_AVG_06']
            },
            {
                y: 7,
                a: response['ASOS_STATION'][0]['CSS_AVG_07'],
                b: response['ASOS_STATION'][1]['CSS_AVG_07']
            },
            {
                y: 8,
                a: response['ASOS_STATION'][0]['CSS_AVG_08'],
                b: response['ASOS_STATION'][1]['CSS_AVG_08']
            },
            {
                y: 9,
                a: response['ASOS_STATION'][0]['CSS_AVG_09'],
                b: response['ASOS_STATION'][1]['CSS_AVG_09']
            },
            {
                y: 10,
                a: response['ASOS_STATION'][0]['CSS_AVG_10'],
                b: response['ASOS_STATION'][1]['CSS_AVG_10']
            },
            {
                y: 11,
                a: response['ASOS_STATION'][0]['CSS_AVG_11'],
                b: response['ASOS_STATION'][1]['CSS_AVG_11']
            },
            {
                y: 12,
                a: response['ASOS_STATION'][0]['CSS_AVG_12'],
                b: response['ASOS_STATION'][1]['CSS_AVG_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: false,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['최다발생 평균 기온', '최소발생 평균 기온'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart2',
        data: [           
            {
                y: 1,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_01'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_01']
            },
            {
                y: 2,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_02'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_02']
            },
            {
                y: 3,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_03'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_03']
            },
            {
                y: 4,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_04'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_04']
            },
            {
                y: 5,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_05'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_05']
            },
            {
                y: 6,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_06'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_06']
            },
            {
                y: 7,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_07'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_07']
            },
            {
                y: 8,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_08'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_08']
            },
            {
                y: 9,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_09'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_09']
            },
            {
                y: 10,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_10'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_10']
            },
            {
                y: 11,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_11'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_11']
            },
            {
                y: 12,
                a: response['ASOS_STATION'][0]['MIN_CSS_AVG_12'],
                b: response['ASOS_STATION'][1]['MIN_CSS_AVG_12']
            }
        ]
        ,
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['최다 발생 최저 기온 평균', '최저 발생 최저 기온 평균'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart3',
        data: [
        {
                y: 1,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_01'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_01']
            },
            {
                y: 2,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_02'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_02']
            },
            {
                y: 3,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_03'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_03']
            },
            {
                y: 4,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_04'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_04']
            },
            {
                y: 5,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_05'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_05']
            },
            {
                y: 6,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_06'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_06']
            },
            {
                y: 7,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_07'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_07']
            },
            {
                y: 8,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_08'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_08']
            },
            {
                y: 9,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_09'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_09']
            },
            {
                y: 10,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_10'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_10']
            },
            {
                y: 11,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_11'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_11']
            },
            {
                y: 12,
                a: response['ASOS_STATION'][0]['MAX_CSS_AVG_12'],
                b: response['ASOS_STATION'][1]['MAX_CSS_AVG_12']
            }
        ],
        xkey: 'y',
        redraw: true,
        resize: true,
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart4',
        data: [{
                y: 1,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_01'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_01']
            },
            {
                y: 2,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_02'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_02']
            },
            {
                y: 3,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_03'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_03']
            },
            {
                y: 4,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_04'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_04']
            },
            {
                y: 5,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_05'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_05']
            },
            {
                y: 6,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_06'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_06']
            },
            {
                y: 7,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_07'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_07']
            },
            {
                y: 8,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_08'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_08']
            },
            {
                y: 9,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_09'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_09']
            },
            {
                y: 10,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_10'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_10']
            },
            {
                y: 11,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_11'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_11']
            },
            {
                y: 12,
                a: response['ASOS_STATION'][0]['MAX_IWS_DEG_12'],
                b: response['ASOS_STATION'][1]['MAX_IWS_DEG_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart5',
        data: [{
                y: 1,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_01'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_01']
            },
            {
                y: 2,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_02'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_02']
            },
            {
                y: 3,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_03'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_03']
            },
            {
                y: 4,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_04'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_04']
            },
            {
                y: 5,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_05'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_05']
            },
            {
                y: 6,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_06'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_06']
            },
            {
                y: 7,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_07'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_07']
            },
            {
                y: 8,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_08'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_08']
            },
            {
                y: 9,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_09'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_09']
            },
            {
                y: 10,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_10'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_10']
            },
            {
                y: 11,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_11'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_11']
            },
            {
                y: 12,
                a: response['ASOS_STATION'][0]['MAX_WS_MS_12'],
                b: response['ASOS_STATION'][1]['MAX_WS_MS_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });

    Morris.Line({
        element: 'morris-line-smooth-chart6',
        data: [{
                y: '1',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_01'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_01']
            },
            {
                y: '2',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_02'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_02']
            },
            {
                y: '3',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_03'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_03']
            },
            {
                y: '4',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_04'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_04']
            },
            {
                y: '5',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_05'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_05']
            },
            {
                y: '6',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_06'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_06']
            },
            {
                y: '7',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_07'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_07']
            },
            {
                y: '8',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_08'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_08']
            },
            {
                y: '9',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_09'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_09']
            },
            {
                y: '10',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_10'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_10']
            },
            {
                y: '11',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_11'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_11']
            },
            {
                y: '12',
                a: response['ASOS_STATION'][0]['MAX_WS_DEG_12'],
                b: response['ASOS_STATION'][1]['MAX_WS_DEG_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });

    Morris.Line({
        element: 'morris-line-smooth-chart7',
        data: [{
                y: '1',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_01'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_01']
            },
            {
                y: '2',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_02'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_02']
            },
            {
                y: '3',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_03'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_03']
            },
            {
                y: '4',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_04'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_04']
            },
            {
                y: '5',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_05'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_05']
            },
            {
                y: '6',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_06'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_06']
            },
            {
                y: '7',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_07'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_07']
            },
            {
                y: '8',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_08'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_08']
            },
            {
                y: '9',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_09'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_09']
            },
            {
                y: '10',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_10'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_10']
            },
            {
                y: '11',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_11'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_11']
            },
            {
                y: '12',
                a: response['ASOS_STATION'][0]['WS_AVG_MS_12'],
                b: response['ASOS_STATION'][1]['WS_AVG_MS_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });

    Morris.Line({
        element: 'morris-line-smooth-chart8',
        data: [{
                y: '1',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_01'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_01']
            },
            {
                y: '2',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_02'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_02']
            },
            {
                y: '3',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_03'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_03']
            },
            {
                y: '4',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_04'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_04']
            },
            {
                y: '5',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_05'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_05']
            },
            {
                y: '6',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_06'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_06']
            },
            {
                y: '7',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_07'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_07']
            },
            {
                y: '8',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_08'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_08']
            },
            {
                y: '9',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_09'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_09']
            },
            {
                y: '10',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_10'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_10']
            },
            {
                y: '11',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_11'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_11']
            },
            {
                y: '12',
                a: response['ASOS_STATION'][0]['MAX_WO_DEG_12'],
                b: response['ASOS_STATION'][1]['MAX_WO_DEG_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart9',
        data: [{
                y: '1',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_01'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_01']
            },
            {
                y: '2',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_02'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_02']
            },
            {
                y: '3',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_03'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_03']
            },
            {
                y: '4',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_04'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_04']
            },
            {
                y: '5',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_05'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_05']
            },
            {
                y: '6',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_06'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_06']
            },
            {
                y: '7',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_07'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_07']
            },
            {
                y: '8',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_08'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_08']
            },
            {
                y: '9',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_09'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_09']
            },
            {
                y: '10',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_10'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_10']
            },
            {
                y: '11',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_11'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_11']
            },
            {
                y: '12',
                a: response['ASOS_STATION'][0]['CSS_DEW_AVG_12'],
                b: response['ASOS_STATION'][1]['CSS_DEW_AVG_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart10',
        data: [{
                y: '1',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_01'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_01']
            },
            {
                y: '2',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_02'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_02']
            },
            {
                y: '3',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_03'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_03']
            },
            {
                y: '4',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_04'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_04']
            },
            {
                y: '5',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_05'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_05']
            },
            {
                y: '6',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_06'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_06']
            },
            {
                y: '7',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_07'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_07']
            },
            {
                y: '8',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_08'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_08']
            },
            {
                y: '9',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_09'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_09']
            },
            {
                y: '10',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_10'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_10']
            },
            {
                y: '11',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_11'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_11']
            },
            {
                y: '12',
                a: response['ASOS_STATION'][0]['MIN_REL_HUMID_12'],
                b: response['ASOS_STATION'][1]['MIN_REL_HUMID_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart11',
        data: [{
                y: '1',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_01'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_01']
            },
            {
                y: '2',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_02'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_02']
            },
            {
                y: '3',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_03'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_03']
            },
            {
                y: '4',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_04'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_04']
            },
            {
                y: '5',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_05'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_05']
            },
            {
                y: '6',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_06'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_06']
            },
            {
                y: '7',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_07'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_07']
            },
            {
                y: '8',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_08'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_08']
            },
            {
                y: '9',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_09'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_09']
            },
            {
                y: '10',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_10'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_10']
            },
            {
                y: '11',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_11'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_11']
            },
            {
                y: '12',
                a: response['ASOS_STATION'][0]['REL_HUMID_AVG_12'],
                b: response['ASOS_STATION'][1]['REL_HUMID_AVG_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart12',
        data: [{
                y: '1',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_01'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_01']
            },
            {
                y: '2',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_02'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_02']
            },
            {
                y: '3',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_03'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_03']
            },
            {
                y: '4',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_04'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_04']
            },
            {
                y: '5',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_05'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_05']
            },
            {
                y: '6',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_06'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_06']
            },
            {
                y: '7',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_07'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_07']
            },
            {
                y: '8',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_08'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_08']
            },
            {
                y: '9',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_09'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_09']
            },
            {
                y: '10',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_10'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_10']
            },
            {
                y: '11',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_11'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_11']
            },
            {
                y: '12',
                a: response['ASOS_STATION'][0]['VAPOR_AVG_12'],
                b: response['ASOS_STATION'][1]['VAPOR_AVG_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart13',
        data: [{
                y: '1',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_01'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_01']
            },
            {
                y: '2',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_02'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_02']
            },
            {
                y: '3',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_03'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_03']
            },
            {
                y: '4',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_04'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_04']
            },
            {
                y: '5',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_05'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_05']
            },
            {
                y: '6',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_06'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_06']
            },
            {
                y: '7',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_07'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_07']
            },
            {
                y: '8',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_08'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_08']
            },
            {
                y: '9',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_09'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_09']
            },
            {
                y: '10',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_10'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_10']
            },
            {
                y: '11',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_11'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_11']
            },
            {
                y: '12',
                a: response['ASOS_STATION'][0]['VAPOR_LOCAL_AVG_12'],
                b: response['ASOS_STATION'][1]['VAPOR_LOCAL_AVG_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart14',
        data: [{
                y: '1',
                a: response['ASOS_STATION'][0]['PDOS_HR_01'],
                b: response['ASOS_STATION'][1]['PDOS_HR_01']
            },
            {
                y: '2',
                a: response['ASOS_STATION'][0]['PDOS_HR_02'],
                b: response['ASOS_STATION'][1]['PDOS_HR_02']
            },
            {
                y: '3',
                a: response['ASOS_STATION'][0]['PDOS_HR_03'],
                b: response['ASOS_STATION'][1]['PDOS_HR_03']
            },
            {
                y: '4',
                a: response['ASOS_STATION'][0]['PDOS_HR_04'],
                b: response['ASOS_STATION'][1]['PDOS_HR_04']
            },
            {
                y: '5',
                a: response['ASOS_STATION'][0]['PDOS_HR_05'],
                b: response['ASOS_STATION'][1]['PDOS_HR_05']
            },
            {
                y: '6',
                a: response['ASOS_STATION'][0]['PDOS_HR_06'],
                b: response['ASOS_STATION'][1]['PDOS_HR_06']
            },
            {
                y: '7',
                a: response['ASOS_STATION'][0]['PDOS_HR_07'],
                b: response['ASOS_STATION'][1]['PDOS_HR_07']
            },
            {
                y: '8',
                a: response['ASOS_STATION'][0]['PDOS_HR_08'],
                b: response['ASOS_STATION'][1]['PDOS_HR_08']
            },
            {
                y: '9',
                a: response['ASOS_STATION'][0]['PDOS_HR_09'],
                b: response['ASOS_STATION'][1]['PDOS_HR_09']
            },
            {
                y: '10',
                a: response['ASOS_STATION'][0]['PDOS_HR_10'],
                b: response['ASOS_STATION'][1]['PDOS_HR_10']
            },
            {
                y: '11',
                a: response['ASOS_STATION'][0]['PDOS_HR_11'],
                b: response['ASOS_STATION'][1]['PDOS_HR_11']
            },
            {
                y: '12',
                a: response['ASOS_STATION'][0]['PDOS_HR_12'],
                b: response['ASOS_STATION'][1]['PDOS_HR_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart15',
        data: [{
                y: '1',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_01'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_01']
            },
            {
                y: '2',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_02'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_02']
            },
            {
                y: '3',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_03'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_03']
            },
            {
                y: '4',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_04'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_04']
            },
            {
                y: '5',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_05'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_05']
            },
            {
                y: '6',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_06'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_06']
            },
            {
                y: '7',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_07'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_07']
            },
            {
                y: '8',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_08'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_08']
            },
            {
                y: '9',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_09'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_09']
            },
            {
                y: '10',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_10'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_10']
            },
            {
                y: '11',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_11'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_11']
            },
            {
                y: '12',
                a: response['ASOS_STATION'][0]['CSS_GRD_AVG_12'],
                b: response['ASOS_STATION'][1]['CSS_GRD_AVG_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    });
    Morris.Line({
        element: 'morris-line-smooth-chart16',
        data: [{
                y: '1',
                a: response['ASOS_STATION'][0]['RF_AVG_01'],
                b: response['ASOS_STATION'][1]['RF_AVG_01']
            },
            {
                y: '2',
                a: response['ASOS_STATION'][0]['RF_AVG_02'],
                b: response['ASOS_STATION'][1]['RF_AVG_02']
            },
            {
                y: '3',
                a: response['ASOS_STATION'][0]['RF_AVG_03'],
                b: response['ASOS_STATION'][1]['RF_AVG_03']
            },
            {
                y: '4',
                a: response['ASOS_STATION'][0]['RF_AVG_04'],
                b: response['ASOS_STATION'][1]['RF_AVG_04']
            },
            {
                y: '5',
                a: response['ASOS_STATION'][0]['RF_AVG_05'],
                b: response['ASOS_STATION'][1]['RF_AVG_05']
            },
            {
                y: '6',
                a: response['ASOS_STATION'][0]['RF_AVG_06'],
                b: response['ASOS_STATION'][1]['RF_AVG_06']
            },
            {
                y: '7',
                a: response['ASOS_STATION'][0]['RF_AVG_07'],
                b: response['ASOS_STATION'][1]['RF_AVG_07']
            },
            {
                y: '8',
                a: response['ASOS_STATION'][0]['RF_AVG_08'],
                b: response['ASOS_STATION'][1]['RF_AVG_08']
            },
            {
                y: '9',
                a: response['ASOS_STATION'][0]['RF_AVG_09'],
                b: response['ASOS_STATION'][1]['RF_AVG_09']
            },
            {
                y: '10',
                a: response['ASOS_STATION'][0]['RF_AVG_10'],
                b: response['ASOS_STATION'][1]['RF_AVG_10']
            },
            {
                y: '11',
                a: response['ASOS_STATION'][0]['RF_AVG_11'],
                b: response['ASOS_STATION'][1]['RF_AVG_11']
            },
            {
                y: '12',
                a: response['ASOS_STATION'][0]['RF_AVG_12'],
                b: response['ASOS_STATION'][1]['RF_AVG_12']
            }
        ],
        xkey: 'y',
        parseTime:false,
        xLabelFormat: function(x){
            var index = parseInt(x.src.y);
            return monthNames[index];
        },
        xLabels:"month",
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        hoverCallback: function (index, options,content,row) {
            var hover = "<b><span style='color:#1de9b6'>최다발생 평균 기온 : "+row.a+"</span><br><span style='color: #A389D4'>최소발생 평균 기온 : "+row.b+"</span></b>";
            return hover;
            },
        responsive:true,
        labels: ['Series A', 'Series B'],
        lineColors: ['#1de9b6', '#A389D4']
    })
};

