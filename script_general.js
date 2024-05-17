(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"gap":10,"children":["this.MainViewer"],"minWidth":0,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","data":{"defaultLocale":"ru","textToSpeechConfig":{"rate":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1},"history":{},"locales":{"ru":"locale/ru.txt"},"name":"Player475"},"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"hash": "9bf02b9e5f64bf8d22c12a75df71d4a98fca284a20d71069d6ee4d390f5a4528", "definitions": [{"id":"panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_75E68034_7EA6_9FDC_4166_514D29CC0EF2"},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","displayPlaybackBar":true,"aaEnabled":true,"arrowKeysAction":"translate"},{"id":"panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_746D3C87_7EA3_80BD_41DE_E3A7A4F51BAC"},{"id":"panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0","vfov":88.34,"thumbnailUrl":"media/panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0_t.jpg","label":trans('panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0.label'),"class":"Panorama","adjacentPanoramas":[{"yaw":-151.12,"class":"AdjacentPanorama","distance":100,"backwardYaw":108.51,"data":{"overlayID":"overlay_719B5EE1_7EA3_8075_4192_09713FAB966B"},"panorama":"this.panorama_750435B0_7EA2_80D3_41A9_F52129853BC4","select":"this.overlay_719B5EE1_7EA3_8075_4192_09713FAB966B.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfov":360,"overlays":["this.overlay_719B5EE1_7EA3_8075_4192_09713FAB966B"],"data":{"label":"2 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0435"},"frames":[{"thumbnailUrl":"media/panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":10752,"class":"TiledImageResourceLevel","colCount":126,"rowCount":21,"url":"media/panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0_0/{face}/0/{row}_{column}.jpg","width":64512,"tags":"ondemand"},{"height":5632,"class":"TiledImageResourceLevel","colCount":66,"rowCount":11,"url":"media/panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0_0/{face}/1/{row}_{column}.jpg","width":33792,"tags":"ondemand"},{"height":3072,"class":"TiledImageResourceLevel","colCount":36,"rowCount":6,"url":"media/panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0_0/{face}/2/{row}_{column}.jpg","width":18432,"tags":"ondemand"},{"height":1536,"class":"TiledImageResourceLevel","colCount":18,"rowCount":3,"url":"media/panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0_0/{face}/3/{row}_{column}.jpg","width":9216,"tags":"ondemand"},{"height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2,"url":"media/panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0_0/{face}/4/{row}_{column}.jpg","width":6144,"tags":"ondemand"},{"height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1,"url":"media/panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0_0/{face}/5/{row}_{column}.jpg","width":3072,"tags":["ondemand","preload"]}]}}],"hfovMax":130},{"id":"mainPlayList","items":[{"media":"this.panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"media":"this.panorama_750435B0_7EA2_80D3_41A9_F52129853BC4","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"media":"this.panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"media":"this.panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"class":"PlayList"},{"id":"panorama_750435B0_7EA2_80D3_41A9_F52129853BC4","vfov":89.93,"thumbnailUrl":"media/panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_t.jpg","label":trans('panorama_750435B0_7EA2_80D3_41A9_F52129853BC4.label'),"class":"Panorama","adjacentPanoramas":[{"yaw":-84.99,"class":"AdjacentPanorama","distance":100,"backwardYaw":-12.11,"data":{"overlayID":"overlay_71B3191E_7EA2_81CF_41D2_7600F793F990"},"panorama":"this.panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67","select":"this.overlay_71B3191E_7EA2_81CF_41D2_7600F793F990.get('areas').forEach(function(a){ a.trigger('click') })"},{"yaw":108.51,"class":"AdjacentPanorama","distance":100,"backwardYaw":-151.12,"data":{"overlayID":"overlay_71ECB1BF_7EA2_80CD_41C9_1CC5F8F98F5A"},"panorama":"this.panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0","select":"this.overlay_71ECB1BF_7EA2_80CD_41C9_1CC5F8F98F5A.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfov":360,"overlays":["this.overlay_71B3191E_7EA2_81CF_41D2_7600F793F990","this.overlay_71ECB1BF_7EA2_80CD_41C9_1CC5F8F98F5A"],"data":{"label":"1 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0435"},"frames":[{"thumbnailUrl":"media/panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":10240,"class":"TiledImageResourceLevel","colCount":120,"rowCount":20,"url":"media/panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_0/{face}/0/{row}_{column}.jpg","width":61440,"tags":"ondemand"},{"height":5120,"class":"TiledImageResourceLevel","colCount":60,"rowCount":10,"url":"media/panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_0/{face}/1/{row}_{column}.jpg","width":30720,"tags":"ondemand"},{"height":2560,"class":"TiledImageResourceLevel","colCount":30,"rowCount":5,"url":"media/panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_0/{face}/2/{row}_{column}.jpg","width":15360,"tags":"ondemand"},{"height":1536,"class":"TiledImageResourceLevel","colCount":18,"rowCount":3,"url":"media/panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_0/{face}/3/{row}_{column}.jpg","width":9216,"tags":"ondemand"},{"height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2,"url":"media/panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_0/{face}/4/{row}_{column}.jpg","width":6144,"tags":"ondemand"},{"height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1,"url":"media/panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_0/{face}/5/{row}_{column}.jpg","width":3072,"tags":["ondemand","preload"]}]}}],"hfovMax":130},{"id":"panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6","vfov":84.7,"thumbnailUrl":"media/panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_t.jpg","label":trans('panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6.label'),"class":"Panorama","adjacentPanoramas":[{"yaw":70.17,"class":"AdjacentPanorama","distance":100,"backwardYaw":5.26,"data":{"overlayID":"overlay_707BDBCB_7EA5_80B5_41CC_9EA03B41970E"},"panorama":"this.panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67","select":"this.overlay_707BDBCB_7EA5_80B5_41CC_9EA03B41970E.get('areas').forEach(function(a){ a.trigger('click') })"},{"yaw":-107.21,"class":"AdjacentPanorama","distance":100,"backwardYaw":5.26,"data":{"overlayID":"overlay_71827588_7EA5_80B3_41D2_D4949904649D"},"panorama":"this.panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67","select":"this.overlay_71827588_7EA5_80B3_41D2_D4949904649D.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfov":360,"overlays":["this.overlay_707BDBCB_7EA5_80B5_41CC_9EA03B41970E","this.overlay_71827588_7EA5_80B3_41D2_D4949904649D"],"data":{"label":"1 \u044d\u0442\u0430\u0436"},"frames":[{"thumbnailUrl":"media/panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":11776,"class":"TiledImageResourceLevel","colCount":138,"rowCount":23,"url":"media/panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_0/{face}/0/{row}_{column}.jpg","width":70656,"tags":"ondemand"},{"height":6144,"class":"TiledImageResourceLevel","colCount":72,"rowCount":12,"url":"media/panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_0/{face}/1/{row}_{column}.jpg","width":36864,"tags":"ondemand"},{"height":3072,"class":"TiledImageResourceLevel","colCount":36,"rowCount":6,"url":"media/panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_0/{face}/2/{row}_{column}.jpg","width":18432,"tags":"ondemand"},{"height":1536,"class":"TiledImageResourceLevel","colCount":18,"rowCount":3,"url":"media/panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_0/{face}/3/{row}_{column}.jpg","width":9216,"tags":"ondemand"},{"height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2,"url":"media/panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_0/{face}/4/{row}_{column}.jpg","width":6144,"tags":"ondemand"},{"height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1,"url":"media/panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_0/{face}/5/{row}_{column}.jpg","width":3072,"tags":["ondemand","preload"]}]}}],"hfovMax":130},{"playbackBarBackgroundColor":["#FFFFFF"],"id":"MainViewer","playbackBarBackgroundOpacity":1,"data":{"name":"Main Viewer"},"toolTipPaddingRight":6,"toolTipTextShadowColor":"#000000","subtitlesFontFamily":"Arial","playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0],"progressLeft":"33%","playbackBarHeight":10,"playbackBarProgressBorderSize":0,"subtitlesGap":0,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"propagateClick":false,"subtitlesBackgroundColor":"#000000","progressBorderSize":0,"progressHeight":2,"progressRight":"33%","subtitlesTop":0,"subtitlesBorderColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","toolTipBorderColor":"#767676","width":"100%","progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","height":"100%","playbackBarHeadShadowOpacity":0.7,"progressBarBorderRadius":2,"progressBarBorderColor":"#000000","playbackBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingTop":4,"minHeight":50,"vrPointerSelectionColor":"#FF6600","minWidth":100,"progressBarBorderSize":0,"vrPointerSelectionTime":2000,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBorderRadius":0,"progressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadBorderColor":"#000000","vrThumbstickRotationStep":20,"playbackBarBorderSize":0,"playbackBarHeadHeight":15,"subtitlesTextShadowOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarLeft":0,"subtitlesBackgroundOpacity":0.2,"toolTipPaddingLeft":6,"playbackBarHeadShadowColor":"#000000","toolTipPaddingBottom":4,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowHorizontalLength":1,"toolTipShadowColor":"#333138","toolTipFontColor":"#606060","class":"ViewerArea","playbackBarHeadBorderSize":0,"subtitlesFontSize":"3vmin","playbackBarHeadShadow":true,"progressBackgroundColor":["#000000"],"firstTransitionDuration":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"toolTipFontSize":"1.11vmin","progressBottom":10,"subtitlesBottom":50,"progressBorderRadius":2},{"id":"panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_75E114E6_7EA5_807F_41D2_5180DD4EAF78"},{"id":"panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_75E53066_7EA5_807F_41C6_83AFF6441CDC"},{"id":"panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67","vfov":91.64,"thumbnailUrl":"media/panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_t.jpg","label":trans('panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67.label'),"class":"Panorama","adjacentPanoramas":[{"yaw":-12.11,"class":"AdjacentPanorama","distance":100,"backwardYaw":-84.99,"data":{"overlayID":"overlay_7195BFC2_7EA6_80B7_416F_BD331B670955"},"panorama":"this.panorama_750435B0_7EA2_80D3_41A9_F52129853BC4","select":"this.overlay_7195BFC2_7EA6_80B7_416F_BD331B670955.get('areas').forEach(function(a){ a.trigger('click') })"},{"yaw":5.26,"class":"AdjacentPanorama","distance":100,"backwardYaw":70.17,"data":{"overlayID":"overlay_718B609B_7EA7_80D5_41DC_1545674CB0A0"},"panorama":"this.panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6","select":"this.overlay_718B609B_7EA7_80D5_41DC_1545674CB0A0.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfov":360,"overlays":["this.overlay_718B609B_7EA7_80D5_41DC_1545674CB0A0","this.overlay_7195BFC2_7EA6_80B7_416F_BD331B670955"],"data":{"label":"2 \u044d\u0442\u0430\u0436"},"frames":[{"thumbnailUrl":"media/panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":10752,"class":"TiledImageResourceLevel","colCount":126,"rowCount":21,"url":"media/panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_0/{face}/0/{row}_{column}.jpg","width":64512,"tags":"ondemand"},{"height":5632,"class":"TiledImageResourceLevel","colCount":66,"rowCount":11,"url":"media/panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_0/{face}/1/{row}_{column}.jpg","width":33792,"tags":"ondemand"},{"height":3072,"class":"TiledImageResourceLevel","colCount":36,"rowCount":6,"url":"media/panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_0/{face}/2/{row}_{column}.jpg","width":18432,"tags":"ondemand"},{"height":1536,"class":"TiledImageResourceLevel","colCount":18,"rowCount":3,"url":"media/panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_0/{face}/3/{row}_{column}.jpg","width":9216,"tags":"ondemand"},{"height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2,"url":"media/panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_0/{face}/4/{row}_{column}.jpg","width":6144,"tags":"ondemand"},{"height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1,"url":"media/panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_0/{face}/5/{row}_{column}.jpg","width":3072,"tags":["ondemand","preload"]}]}}],"hfovMax":130},{"id":"sequence_75E68034_7EA6_9FDC_4166_514D29CC0EF2","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"id":"sequence_746D3C87_7EA3_80BD_41DE_E3A7A4F51BAC","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"id":"overlay_719B5EE1_7EA3_8075_4192_09713FAB966B","enabledInCardboard":true,"data":{"label":"Polygon"},"useHandCursor":true,"items":[{"vfov":30.63,"hfov":12.99,"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":-151.12,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"height":2047,"class":"ImageResourceLevel","url":"media/panorama_7572EEB6_7EA5_80DF_41D1_27B1D31F81D0_HS_6xtm5op6.png","width":851}]},"pitch":12.5}],"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_71E69EE6_7EA3_807F_41CE_23143F6F6C31"]},{"id":"overlay_71B3191E_7EA2_81CF_41D2_7600F793F990","enabledInCardboard":true,"data":{"label":"Polygon"},"useHandCursor":true,"items":[{"vfov":24.44,"hfov":10.97,"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":-84.99,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"height":2048,"class":"ImageResourceLevel","url":"media/panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_HS_682cajte.png","width":908}]},"pitch":16.5}],"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_7182E925_7EA2_81FD_41D6_303E86B146AC"]},{"id":"overlay_71ECB1BF_7EA2_80CD_41C9_1CC5F8F98F5A","enabledInCardboard":true,"data":{"label":"Polygon"},"useHandCursor":true,"items":[{"vfov":23.66,"hfov":11.03,"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":108.51,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"height":2048,"class":"ImageResourceLevel","url":"media/panorama_750435B0_7EA2_80D3_41A9_F52129853BC4_HS_t7hizxvu.png","width":944}]},"pitch":7.31}],"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_71ED81C5_7EA2_80BD_41AE_64F23AE62EF8"]},{"id":"overlay_707BDBCB_7EA5_80B5_41CC_9EA03B41970E","enabledInCardboard":true,"data":{"label":"Polygon"},"useHandCursor":true,"items":[{"vfov":7.41,"hfov":5.36,"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":70.17,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"height":750,"class":"ImageResourceLevel","url":"media/panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_HS_6twijhvh.png","width":542}]},"pitch":4.17}],"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_70450BD1_7EA5_8055_41CA_7BFC547D3C7F"]},{"id":"overlay_71827588_7EA5_80B3_41D2_D4949904649D","enabledInCardboard":true,"data":{"label":"Polygon"},"useHandCursor":true,"items":[{"vfov":6.76,"hfov":5.3,"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":-107.21,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"height":684,"class":"ImageResourceLevel","url":"media/panorama_73C10C91_7EA3_80D5_41BF_EA7FA555DDD6_HS_lmta48n3.png","width":536}]},"pitch":5.81}],"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_7183558E_7EA5_80CF_419B_AD219B0D83FA"]},{"id":"sequence_75E114E6_7EA5_807F_41D2_5180DD4EAF78","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"id":"sequence_75E53066_7EA5_807F_41C6_83AFF6441CDC","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"id":"overlay_718B609B_7EA7_80D5_41DC_1545674CB0A0","enabledInCardboard":true,"data":{"label":"Polygon"},"useHandCursor":true,"items":[{"vfov":47.43,"hfov":20.35,"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":5.26,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"height":2048,"class":"ImageResourceLevel","url":"media/panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_HS_amc4um1a.png","width":836}]},"pitch":9.09}],"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_71EBC0C8_7EA7_80B3_41D7_B316BBA360A6"]},{"id":"overlay_7195BFC2_7EA6_80B7_416F_BD331B670955","enabledInCardboard":true,"data":{"label":"Polygon"},"useHandCursor":true,"items":[{"vfov":48.02,"hfov":18.77,"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":-12.11,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"height":2048,"class":"ImageResourceLevel","url":"media/panorama_7544EABE_7EA5_80CF_41DA_72B9382D9B67_HS_niozau4n.png","width":759}]},"pitch":8.92}],"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_7195EFC6_7EA6_80BF_41B4_C6854231BC29"]},{"id":"HotspotPanoramaOverlayArea_71E69EE6_7EA3_807F_41CE_23143F6F6C31","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_7182E925_7EA2_81FD_41D6_303E86B146AC","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_71ED81C5_7EA2_80BD_41AE_64F23AE62EF8","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_70450BD1_7EA5_8055_41CA_7BFC547D3C7F","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_7183558E_7EA5_80CF_419B_AD219B0D83FA","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_71EBC0C8_7EA7_80B3_41D7_B316BBA360A6","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_7195EFC6_7EA6_80BF_41B4_C6854231BC29","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"image"}],"class":"Player","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","width":"100%","layout":"absolute","height":"100%","scripts":{"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"shareSocial":TDV.Tour.Script.shareSocial,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"executeJS":TDV.Tour.Script.executeJS,"setMapLocation":TDV.Tour.Script.setMapLocation,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"init":TDV.Tour.Script.init,"translate":TDV.Tour.Script.translate,"existsKey":TDV.Tour.Script.existsKey,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"historyGoBack":TDV.Tour.Script.historyGoBack,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"createTween":TDV.Tour.Script.createTween,"unregisterKey":TDV.Tour.Script.unregisterKey,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"initQuiz":TDV.Tour.Script.initQuiz,"setLocale":TDV.Tour.Script.setLocale,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playAudioList":TDV.Tour.Script.playAudioList,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"clone":TDV.Tour.Script.clone,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizShowScore":TDV.Tour.Script.quizShowScore,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"mixObject":TDV.Tour.Script.mixObject,"quizStart":TDV.Tour.Script.quizStart,"getMediaByName":TDV.Tour.Script.getMediaByName,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"isPanorama":TDV.Tour.Script.isPanorama,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"openLink":TDV.Tour.Script.openLink,"setValue":TDV.Tour.Script.setValue,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizFinish":TDV.Tour.Script.quizFinish,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPixels":TDV.Tour.Script.getPixels},"scrollBarColor":"#000000","scrollBarMargin":2,"propagateClick":false,"minHeight":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.12.js.map
})();
//Generated with v2023.2.12, Thu May 16 2024