﻿window.globalProvideData('slide', '{"title":"Urutkan langkah-langkah yang benar dalam pengelolaan dokumen perjalanan dinas:\\nMenyusun dokumen perjalanan dinas\\nMengumpulkan dan memverifikasi dokumen perjalanan\\nMengajukan dokumen kepada atasan untuk persetujuan\\nMembuat laporan perjalanan dinas","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":3,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide3","width":720,"height":1280,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5y0r8SkzVZi","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"eval_interaction","id":"_this.6kqOaS25dSO"}]},"ReviewInt_67vIK2p9pCO":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6kqOaS25dSO.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"67vIK2p9pCO_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"67vIK2p9pCO_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_67vIK2p9pCO","typea":"var","valueb":"6Nmrj9DfTuA","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Nmrj9DfTuA.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_67vIK2p9pCO"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Nmrj9DfTuA.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_67vIK2p9pCO"}]}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_67vIK2p9pCO"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_67vIK2p9pCO":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"list_67vIK2p9pCO"},"enabled":{"type":"boolean","value":true}}]},"AnsweredInt_67vIK2p9pCO":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_67vIK2p9pCO"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_67vIK2p9pCO"},"enabled":{"type":"boolean","value":false}}]},"DisableChoices_67vIK2p9pCO":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"list_67vIK2p9pCO"},"enabled":{"type":"boolean","value":false}}]},"67vIK2p9pCO_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6kqOaS25dSO.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6Nmrj9DfTuA.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_67vIK2p9pCO"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6kqOaS25dSO.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6kqOaS25dSO.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_67vIK2p9pCO"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5y0r8SkzVZi":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5dSKnxVsU4i"}}]},"NavigationRestrictionPreviousSlide_5y0r8SkzVZi":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_649K1mTGZy4","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_649K1mTGZy4","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6Nmrj9DfTuA_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6Nmrj9DfTuA_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6Nmrj9DfTuA_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_67vIK2p9pCO"}]},{"kind":"showtimer","id":"_player.6Nmrj9DfTuA_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_67vIK2p9pCO","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_67vIK2p9pCO"}],"elseActions":[{"kind":"exe_actiongroup","id":"67vIK2p9pCO_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_67vIK2p9pCO","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_67vIK2p9pCO","typea":"var","valueb":"6Nmrj9DfTuA","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Nmrj9DfTuA"},"completed_slide_ref":{"type":"string","value":"_player.5paW7yjgyXs.5sz7sFDpZpg"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_67vIK2p9pCO","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_67vIK2p9pCO","typea":"var","valueb":"6Nmrj9DfTuA","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Nmrj9DfTuA"},"completed_slide_ref":{"type":"string","value":"_player.5paW7yjgyXs.5sz7sFDpZpg"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5y0r8SkzVZi"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5y0r8SkzVZi"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":218,"id":"6YLPQalyisR"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":168349,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Ul1Dyr6Dfy"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6MHPHc6aKMs"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6a14x6ey8XO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ni8HC7kJqN"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"63cMck0WBVS"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"634tTnndzAy"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6GLYmzt4634"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6YLPQalyisR"}},{"kind":"media_play","objRef":{"type":"string","value":"6YLPQalyisR"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6YLPQalyisR"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6oAsvUmF8co"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"list_67vIK2p9pCO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6DcGortMXwP"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":191,"id":"01","url":"story_content/6ZMrhEQhd8i.png","type":"normal","altText":"Video (3).png","width":1151,"height":2047,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":640,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":1280,"altText":"Video (3).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":1280,"strokewidth":0}},"width":720,"height":1280,"resume":true,"useHandCursor":true,"id":"6Ul1Dyr6Dfy"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":32,"yPos":48,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":328,"rotateYPos":552,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":658,"bottom":1106,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":487}},"html5data":{"xPos":-3,"yPos":-3,"width":661,"height":1109,"strokewidth":3}},"width":656,"height":1104,"resume":true,"useHandCursor":true,"id":"6MHPHc6aKMs"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":1192,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":721,"bottom":89,"altText":"Round Same Side Corner 1","pngfb":false,"pr":{"l":"Lib","i":271}},"html5data":{"xPos":-2,"yPos":-2,"width":723,"height":91,"strokewidth":1}},"width":720,"height":88,"resume":true,"useHandCursor":true,"id":"6a14x6ey8XO"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":112,"yPos":24,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":250,"rotateYPos":36,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":501,"bottom":73,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":272}},"html5data":{"xPos":-2,"yPos":-2,"width":503,"height":75,"strokewidth":1}},"width":500,"height":72,"resume":true,"useHandCursor":true,"id":"6ni8HC7kJqN"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":160,"id":"01","url":"story_content/5bV4AATVx9P_P_192_307_780_512.png","type":"normal","altText":"LAYOUT (16).png","width":781,"height":512,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":392,"yPos":1072,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":30.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":61,"bottom":40,"altText":"LAYOUT (16).png","pngfb":false,"pr":{"l":"Lib","i":537}},"html5data":{"xPos":0,"yPos":0,"width":61,"height":40,"strokewidth":0}},"width":61,"height":40,"resume":true,"useHandCursor":true,"id":"63cMck0WBVS","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5paW7yjgyXs.5dSKnxVsU4i"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":159,"id":"01","url":"story_content/5bV4AATVx9P_X_P_192_307_780_512.png","type":"normal","altText":"LAYOUT (16).png","width":781,"height":512,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":265,"yPos":1072,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":28,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":56,"bottom":40,"altText":"LAYOUT (16).png","pngfb":false,"pr":{"l":"Lib","i":541}},"html5data":{"xPos":0,"yPos":0,"width":56,"height":40,"strokewidth":0}},"width":56,"height":40,"resume":true,"useHandCursor":true,"id":"634tTnndzAy","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6GLYmzt4634_-108030930","id":"01","linkId":"txt__default_6GLYmzt4634","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":466,"height":30,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"QUIZ TP 3","style":{"fontFamily":"\\"MontserratBold CharBoldE28D0D51\\",\\"Montserrat\\"","fontSize":18,"fontIsBold":false,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":23.232,"descent":6.024,"leading":0,"underlinePosition":-1.8,"underlineThickness":1.2,"xHeight":12.912}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":9,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":300,"bottom":33,"pngfb":false,"pr":{"l":"Lib","i":779}}}],"shapemaskId":"","xPos":120,"yPos":40,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":240,"rotateYPos":18,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":480,"bottom":36,"altText":"QUIZ TP 3","pngfb":false,"pr":{"l":"Lib","i":603}},"html5data":{"xPos":0,"yPos":0,"width":480,"height":36,"strokewidth":0}},"width":480,"height":36,"resume":true,"useHandCursor":true,"id":"6GLYmzt4634"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":88,"yPos":144,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":272.5,"rotateYPos":136,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":545,"bottom":272,"altText":"Rectangle 4","pngfb":false,"pr":{"l":"Lib","i":787}},"html5data":{"xPos":-1,"yPos":-1,"width":546,"height":273,"strokewidth":0}},"width":545,"height":272,"resume":true,"useHandCursor":true,"id":"6oAsvUmF8co"},{"kind":"sequencectrl","rtl":false,"shapemaskId":"","xPos":76,"yPos":448,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":284,"rotateYPos":180,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":9,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"number_text","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}},{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"itemlist":[{"kind":"item","itemdata":"choices.choice_6cK4PqZ4UbG","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6cK4PqZ4UbG","type":"vectortext","altText":"Menyusun dokumen perjalanan dinas","lmstext":"Menyusun dokumen perjalanan dinas","xPos":20,"yPos":10,"xAccOffset":0,"yAccOffset":0,"width":494,"height":56,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":353,"bottom":32,"altText":"Menyusun dokumen perjalanan dinas","lmstext":"Menyusun dokumen perjalanan dinas","pngfb":false,"pr":{"l":"Lib","i":788}}}},{"kind":"item","itemdata":"choices.choice_6Do9cMXnv4B","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6Do9cMXnv4B","type":"vectortext","altText":"Mengumpulkan dan memverifikasi dokumen perjalanan","lmstext":"Mengumpulkan dan memverifikasi dokumen perjalanan","xPos":20,"yPos":-6,"xAccOffset":0,"yAccOffset":0,"width":494,"height":56,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":483,"bottom":30,"altText":"Mengumpulkan dan memverifikasi dokumen perjalanan","lmstext":"Mengumpulkan dan memverifikasi dokumen perjalanan","pngfb":false,"pr":{"l":"Lib","i":789}}}},{"kind":"item","itemdata":"choices.choice_5a4wC0O80fk","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5a4wC0O80fk","type":"vectortext","altText":"Mengajukan dokumen kepada atasan untuk persetujuan","lmstext":"Mengajukan dokumen kepada atasan untuk persetujuan","xPos":20,"yPos":-6,"xAccOffset":0,"yAccOffset":0,"width":494,"height":56,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":487,"bottom":30,"altText":"Mengajukan dokumen kepada atasan untuk persetujuan","lmstext":"Mengajukan dokumen kepada atasan untuk persetujuan","pngfb":false,"pr":{"l":"Lib","i":790}}}},{"kind":"item","itemdata":"choices.choice_5mg8nt5UCnV","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5mg8nt5UCnV","type":"vectortext","altText":"Membuat laporan perjalanan dinas","lmstext":"Membuat laporan perjalanan dinas","xPos":20,"yPos":10,"xAccOffset":0,"yAccOffset":0,"width":494,"height":56,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":328,"bottom":32,"altText":"Membuat laporan perjalanan dinas","lmstext":"Membuat laporan perjalanan dinas","pngfb":false,"pr":{"l":"Lib","i":791}}}}]},"width":568,"height":360,"resume":true,"useHandCursor":true,"id":"list_67vIK2p9pCO"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6DcGortMXwP_633177736","id":"01","linkId":"txt__default_6DcGortMXwP","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":500,"height":209,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Urutkan langkah-langkah yang benar dalam pengelolaan dokumen perjalanan dinas:\\n","style":{"fontFamily":"\\"Montserrat Charset0_v9p2ADCB779\\",\\"Montserrat\\"","fontSize":16,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.349}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":79,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"Menyusun dokumen perjalanan dinas\\n","style":{"fontFamily":"\\"Montserrat Charset0_v9p2ADCB779\\",\\"Montserrat\\"","fontSize":16,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.349}}],"style":{"leadingMargin":84,"firstLineMargin":36,"listLevel":1,"listStyle":{"listType":"listNumberedAsArabic","size":100,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":34,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"Mengumpulkan dan memverifikasi dokumen perjalanan\\n","style":{"fontFamily":"\\"Montserrat Charset0_v9p2ADCB779\\",\\"Montserrat\\"","fontSize":16,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.349}}],"style":{"leadingMargin":84,"firstLineMargin":36,"listLevel":1,"listStyle":{"listType":"listNumberedAsArabic","size":100,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":50,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"Mengajukan dokumen kepada atasan untuk persetujuan\\n","style":{"fontFamily":"\\"Montserrat Charset0_v9p2ADCB779\\",\\"Montserrat\\"","fontSize":16,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.349}}],"style":{"leadingMargin":84,"firstLineMargin":36,"listLevel":1,"listStyle":{"listType":"listNumberedAsArabic","size":100,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":51,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"Membuat laporan perjalanan dinas","style":{"fontFamily":"\\"Montserrat Charset0_v9p2ADCB779\\",\\"Montserrat\\"","fontSize":16,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":20.651,"descent":5.355,"leading":0,"underlinePosition":-1.6,"underlineThickness":1.067,"xHeight":11.349}}],"style":{"leadingMargin":84,"firstLineMargin":36,"listLevel":1,"listStyle":{"listType":"listNumberedAsArabic","size":100,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":32,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":487,"bottom":214,"pngfb":false,"pr":{"l":"Lib","i":792}}}],"shapemaskId":"","xPos":100,"yPos":160,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":260,"rotateYPos":109.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":520,"bottom":219,"altText":"Urutkan langkah-langkah yang benar dalam pengelolaan dokumen perjalanan dinas:\\nMenyusun dokumen perjalanan dinas\\nMengumpulkan dan memverifikasi dokumen perjalanan\\nMengajukan dokumen kepada atasan untuk persetujuan\\nMembuat laporan perjalanan dinas","pngfb":false,"pr":{"l":"Lib","i":743}},"html5data":{"xPos":0,"yPos":0,"width":520,"height":219,"strokewidth":0}},"width":520,"height":219,"resume":true,"useHandCursor":true,"id":"6DcGortMXwP"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"67vIK2p9pCO_CorrectReview","id":"01","linkId":"67vIK2p9pCO_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":620}}}],"shapemaskId":"","xPos":0,"yPos":1240,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":619}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"67vIK2p9pCO_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"67vIK2p9pCO_IncorrectReview","id":"01","linkId":"67vIK2p9pCO_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":622}}}],"shapemaskId":"","xPos":0,"yPos":1240,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":621}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"67vIK2p9pCO_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');