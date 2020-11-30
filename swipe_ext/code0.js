gdjs.SampleCode = {};
gdjs.SampleCode.GDAngleObjects1= [];
gdjs.SampleCode.GDAngleObjects2= [];
gdjs.SampleCode.GDAngleObjects3= [];
gdjs.SampleCode.GDAngleObjects4= [];
gdjs.SampleCode.GDNumeral1Objects1= [];
gdjs.SampleCode.GDNumeral1Objects2= [];
gdjs.SampleCode.GDNumeral1Objects3= [];
gdjs.SampleCode.GDNumeral1Objects4= [];
gdjs.SampleCode.GDNumeral2Objects1= [];
gdjs.SampleCode.GDNumeral2Objects2= [];
gdjs.SampleCode.GDNumeral2Objects3= [];
gdjs.SampleCode.GDNumeral2Objects4= [];
gdjs.SampleCode.GDDebugCheckObjects1= [];
gdjs.SampleCode.GDDebugCheckObjects2= [];
gdjs.SampleCode.GDDebugCheckObjects3= [];
gdjs.SampleCode.GDDebugCheckObjects4= [];
gdjs.SampleCode.GDControlSwipeObjects1= [];
gdjs.SampleCode.GDControlSwipeObjects2= [];
gdjs.SampleCode.GDControlSwipeObjects3= [];
gdjs.SampleCode.GDControlSwipeObjects4= [];
gdjs.SampleCode.GDDirectionYObjects1= [];
gdjs.SampleCode.GDDirectionYObjects2= [];
gdjs.SampleCode.GDDirectionYObjects3= [];
gdjs.SampleCode.GDDirectionYObjects4= [];
gdjs.SampleCode.GDDirectionXObjects1= [];
gdjs.SampleCode.GDDirectionXObjects2= [];
gdjs.SampleCode.GDDirectionXObjects3= [];
gdjs.SampleCode.GDDirectionXObjects4= [];
gdjs.SampleCode.GDDirectionFor8Objects1= [];
gdjs.SampleCode.GDDirectionFor8Objects2= [];
gdjs.SampleCode.GDDirectionFor8Objects3= [];
gdjs.SampleCode.GDDirectionFor8Objects4= [];
gdjs.SampleCode.GDDirectionFor4Objects1= [];
gdjs.SampleCode.GDDirectionFor4Objects2= [];
gdjs.SampleCode.GDDirectionFor4Objects3= [];
gdjs.SampleCode.GDDirectionFor4Objects4= [];
gdjs.SampleCode.GDLengthObjects1= [];
gdjs.SampleCode.GDLengthObjects2= [];
gdjs.SampleCode.GDLengthObjects3= [];
gdjs.SampleCode.GDLengthObjects4= [];
gdjs.SampleCode.GDIsDebugObjects1= [];
gdjs.SampleCode.GDIsDebugObjects2= [];
gdjs.SampleCode.GDIsDebugObjects3= [];
gdjs.SampleCode.GDIsDebugObjects4= [];
gdjs.SampleCode.GDSwipeLineObjects1= [];
gdjs.SampleCode.GDSwipeLineObjects2= [];
gdjs.SampleCode.GDSwipeLineObjects3= [];
gdjs.SampleCode.GDSwipeLineObjects4= [];
gdjs.SampleCode.GDCircleObjects1= [];
gdjs.SampleCode.GDCircleObjects2= [];
gdjs.SampleCode.GDCircleObjects3= [];
gdjs.SampleCode.GDCircleObjects4= [];
gdjs.SampleCode.GDWallTopObjects1= [];
gdjs.SampleCode.GDWallTopObjects2= [];
gdjs.SampleCode.GDWallTopObjects3= [];
gdjs.SampleCode.GDWallTopObjects4= [];
gdjs.SampleCode.GDWallLeftObjects1= [];
gdjs.SampleCode.GDWallLeftObjects2= [];
gdjs.SampleCode.GDWallLeftObjects3= [];
gdjs.SampleCode.GDWallLeftObjects4= [];

gdjs.SampleCode.conditionTrue_0 = {val:false};
gdjs.SampleCode.condition0IsTrue_0 = {val:false};
gdjs.SampleCode.condition1IsTrue_0 = {val:false};
gdjs.SampleCode.condition2IsTrue_0 = {val:false};
gdjs.SampleCode.conditionTrue_1 = {val:false};
gdjs.SampleCode.condition0IsTrue_1 = {val:false};
gdjs.SampleCode.condition1IsTrue_1 = {val:false};
gdjs.SampleCode.condition2IsTrue_1 = {val:false};


gdjs.SampleCode.mapOfGDgdjs_46SampleCode_46GDIsDebugObjects2Objects = Hashtable.newFrom({"IsDebug": gdjs.SampleCode.GDIsDebugObjects2});gdjs.SampleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Angle"), gdjs.SampleCode.GDAngleObjects3);
gdjs.copyArray(runtimeScene.getObjects("DebugCheck"), gdjs.SampleCode.GDDebugCheckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DirectionFor4"), gdjs.SampleCode.GDDirectionFor4Objects3);
gdjs.copyArray(runtimeScene.getObjects("DirectionFor8"), gdjs.SampleCode.GDDirectionFor8Objects3);
gdjs.copyArray(runtimeScene.getObjects("DirectionX"), gdjs.SampleCode.GDDirectionXObjects3);
gdjs.copyArray(runtimeScene.getObjects("DirectionY"), gdjs.SampleCode.GDDirectionYObjects3);
gdjs.copyArray(runtimeScene.getObjects("Length"), gdjs.SampleCode.GDLengthObjects3);

gdjs.SampleCode.condition0IsTrue_0.val = false;
{
{gdjs.SampleCode.conditionTrue_1 = gdjs.SampleCode.condition0IsTrue_0;
gdjs.SampleCode.condition0IsTrue_1.val = false;
gdjs.SampleCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.SampleCode.GDDebugCheckObjects3.length;i<l;++i) {
    if ( gdjs.SampleCode.GDDebugCheckObjects3[i].getAnimation() == 1 ) {
        gdjs.SampleCode.condition0IsTrue_1.val = true;
        gdjs.SampleCode.GDDebugCheckObjects3[k] = gdjs.SampleCode.GDDebugCheckObjects3[i];
        ++k;
    }
}
gdjs.SampleCode.GDDebugCheckObjects3.length = k;}if ( gdjs.SampleCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.SampleCode.GDAngleObjects3.length;i<l;++i) {
    if ( gdjs.SampleCode.GDAngleObjects3[i].isVisible() ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDAngleObjects3[k] = gdjs.SampleCode.GDAngleObjects3[i];
        ++k;
    }
}
gdjs.SampleCode.GDAngleObjects3.length = k;for(var i = 0, k = 0, l = gdjs.SampleCode.GDDirectionYObjects3.length;i<l;++i) {
    if ( gdjs.SampleCode.GDDirectionYObjects3[i].isVisible() ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDDirectionYObjects3[k] = gdjs.SampleCode.GDDirectionYObjects3[i];
        ++k;
    }
}
gdjs.SampleCode.GDDirectionYObjects3.length = k;for(var i = 0, k = 0, l = gdjs.SampleCode.GDDirectionXObjects3.length;i<l;++i) {
    if ( gdjs.SampleCode.GDDirectionXObjects3[i].isVisible() ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDDirectionXObjects3[k] = gdjs.SampleCode.GDDirectionXObjects3[i];
        ++k;
    }
}
gdjs.SampleCode.GDDirectionXObjects3.length = k;for(var i = 0, k = 0, l = gdjs.SampleCode.GDDirectionFor8Objects3.length;i<l;++i) {
    if ( gdjs.SampleCode.GDDirectionFor8Objects3[i].isVisible() ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDDirectionFor8Objects3[k] = gdjs.SampleCode.GDDirectionFor8Objects3[i];
        ++k;
    }
}
gdjs.SampleCode.GDDirectionFor8Objects3.length = k;for(var i = 0, k = 0, l = gdjs.SampleCode.GDDirectionFor4Objects3.length;i<l;++i) {
    if ( gdjs.SampleCode.GDDirectionFor4Objects3[i].isVisible() ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDDirectionFor4Objects3[k] = gdjs.SampleCode.GDDirectionFor4Objects3[i];
        ++k;
    }
}
gdjs.SampleCode.GDDirectionFor4Objects3.length = k;for(var i = 0, k = 0, l = gdjs.SampleCode.GDLengthObjects3.length;i<l;++i) {
    if ( gdjs.SampleCode.GDLengthObjects3[i].isVisible() ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDLengthObjects3[k] = gdjs.SampleCode.GDLengthObjects3[i];
        ++k;
    }
}
gdjs.SampleCode.GDLengthObjects3.length = k;}}
gdjs.SampleCode.conditionTrue_1.val = true && gdjs.SampleCode.condition0IsTrue_1.val && gdjs.SampleCode.condition1IsTrue_1.val;
}
}if (gdjs.SampleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SampleCode.GDDebugCheckObjects3 */
{for(var i = 0, len = gdjs.SampleCode.GDDebugCheckObjects3.length ;i < len;++i) {
    gdjs.SampleCode.GDDebugCheckObjects3[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Angle"), gdjs.SampleCode.GDAngleObjects2);
gdjs.copyArray(runtimeScene.getObjects("DebugCheck"), gdjs.SampleCode.GDDebugCheckObjects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionFor4"), gdjs.SampleCode.GDDirectionFor4Objects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionFor8"), gdjs.SampleCode.GDDirectionFor8Objects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionX"), gdjs.SampleCode.GDDirectionXObjects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionY"), gdjs.SampleCode.GDDirectionYObjects2);
gdjs.copyArray(runtimeScene.getObjects("Length"), gdjs.SampleCode.GDLengthObjects2);

gdjs.SampleCode.condition0IsTrue_0.val = false;
{
{gdjs.SampleCode.conditionTrue_1 = gdjs.SampleCode.condition0IsTrue_0;
gdjs.SampleCode.condition0IsTrue_1.val = false;
gdjs.SampleCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.SampleCode.GDDebugCheckObjects2.length;i<l;++i) {
    if ( gdjs.SampleCode.GDDebugCheckObjects2[i].getAnimation() == 0 ) {
        gdjs.SampleCode.condition0IsTrue_1.val = true;
        gdjs.SampleCode.GDDebugCheckObjects2[k] = gdjs.SampleCode.GDDebugCheckObjects2[i];
        ++k;
    }
}
gdjs.SampleCode.GDDebugCheckObjects2.length = k;}if ( gdjs.SampleCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.SampleCode.GDAngleObjects2.length;i<l;++i) {
    if ( !(gdjs.SampleCode.GDAngleObjects2[i].isVisible()) ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDAngleObjects2[k] = gdjs.SampleCode.GDAngleObjects2[i];
        ++k;
    }
}
gdjs.SampleCode.GDAngleObjects2.length = k;for(var i = 0, k = 0, l = gdjs.SampleCode.GDDirectionYObjects2.length;i<l;++i) {
    if ( !(gdjs.SampleCode.GDDirectionYObjects2[i].isVisible()) ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDDirectionYObjects2[k] = gdjs.SampleCode.GDDirectionYObjects2[i];
        ++k;
    }
}
gdjs.SampleCode.GDDirectionYObjects2.length = k;for(var i = 0, k = 0, l = gdjs.SampleCode.GDDirectionXObjects2.length;i<l;++i) {
    if ( !(gdjs.SampleCode.GDDirectionXObjects2[i].isVisible()) ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDDirectionXObjects2[k] = gdjs.SampleCode.GDDirectionXObjects2[i];
        ++k;
    }
}
gdjs.SampleCode.GDDirectionXObjects2.length = k;for(var i = 0, k = 0, l = gdjs.SampleCode.GDDirectionFor8Objects2.length;i<l;++i) {
    if ( !(gdjs.SampleCode.GDDirectionFor8Objects2[i].isVisible()) ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDDirectionFor8Objects2[k] = gdjs.SampleCode.GDDirectionFor8Objects2[i];
        ++k;
    }
}
gdjs.SampleCode.GDDirectionFor8Objects2.length = k;for(var i = 0, k = 0, l = gdjs.SampleCode.GDDirectionFor4Objects2.length;i<l;++i) {
    if ( !(gdjs.SampleCode.GDDirectionFor4Objects2[i].isVisible()) ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDDirectionFor4Objects2[k] = gdjs.SampleCode.GDDirectionFor4Objects2[i];
        ++k;
    }
}
gdjs.SampleCode.GDDirectionFor4Objects2.length = k;for(var i = 0, k = 0, l = gdjs.SampleCode.GDLengthObjects2.length;i<l;++i) {
    if ( !(gdjs.SampleCode.GDLengthObjects2[i].isVisible()) ) {
        gdjs.SampleCode.condition1IsTrue_1.val = true;
        gdjs.SampleCode.GDLengthObjects2[k] = gdjs.SampleCode.GDLengthObjects2[i];
        ++k;
    }
}
gdjs.SampleCode.GDLengthObjects2.length = k;}}
gdjs.SampleCode.conditionTrue_1.val = true && gdjs.SampleCode.condition0IsTrue_1.val && gdjs.SampleCode.condition1IsTrue_1.val;
}
}if (gdjs.SampleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SampleCode.GDDebugCheckObjects2 */
{for(var i = 0, len = gdjs.SampleCode.GDDebugCheckObjects2.length ;i < len;++i) {
    gdjs.SampleCode.GDDebugCheckObjects2[i].setAnimation(1);
}
}}

}


};gdjs.SampleCode.eventsList1 = function(runtimeScene) {

{


gdjs.SampleCode.condition0IsTrue_0.val = false;
gdjs.SampleCode.condition1IsTrue_0.val = false;
{
gdjs.SampleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SampleCode.condition0IsTrue_0.val ) {
{
{gdjs.SampleCode.conditionTrue_1 = gdjs.SampleCode.condition1IsTrue_0;
gdjs.SampleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8127708);
}
}}
if (gdjs.SampleCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.SampleCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.SampleCode.eventsList2 = function(runtimeScene) {

{


gdjs.SampleCode.condition0IsTrue_0.val = false;
{
gdjs.SampleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SampleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DebugCheck"), gdjs.SampleCode.GDDebugCheckObjects2);
{for(var i = 0, len = gdjs.SampleCode.GDDebugCheckObjects2.length ;i < len;++i) {
    gdjs.SampleCode.GDDebugCheckObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("IsDebug"), gdjs.SampleCode.GDIsDebugObjects2);

gdjs.SampleCode.condition0IsTrue_0.val = false;
{
gdjs.SampleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SampleCode.mapOfGDgdjs_46SampleCode_46GDIsDebugObjects2Objects, runtimeScene, true, false);
}if (gdjs.SampleCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SampleCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DebugCheck"), gdjs.SampleCode.GDDebugCheckObjects2);

gdjs.SampleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SampleCode.GDDebugCheckObjects2.length;i<l;++i) {
    if ( gdjs.SampleCode.GDDebugCheckObjects2[i].getAnimation() == 0 ) {
        gdjs.SampleCode.condition0IsTrue_0.val = true;
        gdjs.SampleCode.GDDebugCheckObjects2[k] = gdjs.SampleCode.GDDebugCheckObjects2[i];
        ++k;
    }
}
gdjs.SampleCode.GDDebugCheckObjects2.length = k;}if (gdjs.SampleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Angle"), gdjs.SampleCode.GDAngleObjects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionFor4"), gdjs.SampleCode.GDDirectionFor4Objects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionFor8"), gdjs.SampleCode.GDDirectionFor8Objects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionX"), gdjs.SampleCode.GDDirectionXObjects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionY"), gdjs.SampleCode.GDDirectionYObjects2);
gdjs.copyArray(runtimeScene.getObjects("Length"), gdjs.SampleCode.GDLengthObjects2);
{for(var i = 0, len = gdjs.SampleCode.GDAngleObjects2.length ;i < len;++i) {
    gdjs.SampleCode.GDAngleObjects2[i].hide();
}
for(var i = 0, len = gdjs.SampleCode.GDDirectionYObjects2.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionYObjects2[i].hide();
}
for(var i = 0, len = gdjs.SampleCode.GDDirectionXObjects2.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionXObjects2[i].hide();
}
for(var i = 0, len = gdjs.SampleCode.GDDirectionFor8Objects2.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionFor8Objects2[i].hide();
}
for(var i = 0, len = gdjs.SampleCode.GDDirectionFor4Objects2.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionFor4Objects2[i].hide();
}
for(var i = 0, len = gdjs.SampleCode.GDLengthObjects2.length ;i < len;++i) {
    gdjs.SampleCode.GDLengthObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DebugCheck"), gdjs.SampleCode.GDDebugCheckObjects1);

gdjs.SampleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SampleCode.GDDebugCheckObjects1.length;i<l;++i) {
    if ( gdjs.SampleCode.GDDebugCheckObjects1[i].getAnimation() == 1 ) {
        gdjs.SampleCode.condition0IsTrue_0.val = true;
        gdjs.SampleCode.GDDebugCheckObjects1[k] = gdjs.SampleCode.GDDebugCheckObjects1[i];
        ++k;
    }
}
gdjs.SampleCode.GDDebugCheckObjects1.length = k;}if (gdjs.SampleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Angle"), gdjs.SampleCode.GDAngleObjects1);
gdjs.copyArray(runtimeScene.getObjects("DirectionFor4"), gdjs.SampleCode.GDDirectionFor4Objects1);
gdjs.copyArray(runtimeScene.getObjects("DirectionFor8"), gdjs.SampleCode.GDDirectionFor8Objects1);
gdjs.copyArray(runtimeScene.getObjects("DirectionX"), gdjs.SampleCode.GDDirectionXObjects1);
gdjs.copyArray(runtimeScene.getObjects("DirectionY"), gdjs.SampleCode.GDDirectionYObjects1);
gdjs.copyArray(runtimeScene.getObjects("Length"), gdjs.SampleCode.GDLengthObjects1);
{for(var i = 0, len = gdjs.SampleCode.GDAngleObjects1.length ;i < len;++i) {
    gdjs.SampleCode.GDAngleObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.SampleCode.GDDirectionYObjects1.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionYObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.SampleCode.GDDirectionXObjects1.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionXObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.SampleCode.GDDirectionFor8Objects1.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionFor8Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.SampleCode.GDDirectionFor4Objects1.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionFor4Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.SampleCode.GDLengthObjects1.length ;i < len;++i) {
    gdjs.SampleCode.GDLengthObjects1[i].hide(false);
}
}}

}


};gdjs.SampleCode.mapOfGDgdjs_46SampleCode_46GDNumeral1Objects2Objects = Hashtable.newFrom({"Numeral1": gdjs.SampleCode.GDNumeral1Objects2});gdjs.SampleCode.mapOfGDgdjs_46SampleCode_46GDNumeral2Objects2Objects = Hashtable.newFrom({"Numeral2": gdjs.SampleCode.GDNumeral2Objects2});gdjs.SampleCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ControlSwipe"), gdjs.SampleCode.GDControlSwipeObjects2);

gdjs.SampleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SampleCode.GDControlSwipeObjects2.length;i<l;++i) {
    if ( gdjs.SampleCode.GDControlSwipeObjects2[i].getBehavior("Swipe").IsDone((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SampleCode.condition0IsTrue_0.val = true;
        gdjs.SampleCode.GDControlSwipeObjects2[k] = gdjs.SampleCode.GDControlSwipeObjects2[i];
        ++k;
    }
}
gdjs.SampleCode.GDControlSwipeObjects2.length = k;}if (gdjs.SampleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Angle"), gdjs.SampleCode.GDAngleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.SampleCode.GDCircleObjects2);
/* Reuse gdjs.SampleCode.GDControlSwipeObjects2 */
gdjs.copyArray(runtimeScene.getObjects("DirectionFor4"), gdjs.SampleCode.GDDirectionFor4Objects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionFor8"), gdjs.SampleCode.GDDirectionFor8Objects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionX"), gdjs.SampleCode.GDDirectionXObjects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionY"), gdjs.SampleCode.GDDirectionYObjects2);
gdjs.copyArray(runtimeScene.getObjects("Length"), gdjs.SampleCode.GDLengthObjects2);
gdjs.copyArray(runtimeScene.getObjects("Numeral1"), gdjs.SampleCode.GDNumeral1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Numeral2"), gdjs.SampleCode.GDNumeral2Objects2);
{for(var i = 0, len = gdjs.SampleCode.GDAngleObjects2.length ;i < len;++i) {
    gdjs.SampleCode.GDAngleObjects2[i].setString("Angle: " + gdjs.evtTools.common.toString((( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").Angle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.SampleCode.GDDirectionXObjects2.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionXObjects2[i].setString("Direction X: " + gdjs.evtTools.common.toString((( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").DirectionX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.SampleCode.GDDirectionYObjects2.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionYObjects2[i].setString("Direction Y: " + gdjs.evtTools.common.toString((( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").DirectionY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.SampleCode.GDLengthObjects2.length ;i < len;++i) {
    gdjs.SampleCode.GDLengthObjects2[i].setString("Length: " + gdjs.evtTools.common.toString((( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").Length((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.SampleCode.GDDirectionFor4Objects2.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionFor4Objects2[i].setString("Direction for 4 parties: " + (( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? "" :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").GetDirectionsFor4Parties((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.SampleCode.GDDirectionFor8Objects2.length ;i < len;++i) {
    gdjs.SampleCode.GDDirectionFor8Objects2[i].setString("Direction for 8 parties: " + (( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? "" :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").GetDirectionsFor8Parties((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.SampleCode.GDNumeral2Objects2.length ;i < len;++i) {
    gdjs.SampleCode.GDNumeral2Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SampleCode.GDNumeral1Objects2.length ;i < len;++i) {
    gdjs.SampleCode.GDNumeral1Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SampleCode.mapOfGDgdjs_46SampleCode_46GDNumeral1Objects2Objects, (( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").PointStartX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").PointStartY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SampleCode.mapOfGDgdjs_46SampleCode_46GDNumeral2Objects2Objects, (( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").PointEndX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").PointEndY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), "");
}{runtimeScene.getVariables().getFromIndex(0).getChild("AX").setNumber((( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").PointStartX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getVariables().getFromIndex(0).getChild("AY").setNumber((( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").PointStartY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getVariables().getFromIndex(0).getChild("BX").setNumber((( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").PointEndX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getVariables().getFromIndex(0).getChild("BY").setNumber((( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").PointEndY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getVariables().getFromIndex(0).getChild("Draw").setNumber(1);
}{for(var i = 0, len = gdjs.SampleCode.GDNumeral1Objects2.length ;i < len;++i) {
    gdjs.SampleCode.GDNumeral1Objects2[i].resetTimer("destroy");
}
}{for(var i = 0, len = gdjs.SampleCode.GDCircleObjects2.length ;i < len;++i) {
    gdjs.SampleCode.GDCircleObjects2[i].getBehavior("Physics2").applyPolarImpulse((( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").Angle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.SampleCode.GDControlSwipeObjects2.length === 0 ) ? 0 :gdjs.SampleCode.GDControlSwipeObjects2[0].getBehavior("Swipe").Length((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 100, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Numeral1"), gdjs.SampleCode.GDNumeral1Objects1);

gdjs.SampleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SampleCode.GDNumeral1Objects1.length;i<l;++i) {
    if ( gdjs.SampleCode.GDNumeral1Objects1[i].timerElapsedTime("destroy", 0.5) ) {
        gdjs.SampleCode.condition0IsTrue_0.val = true;
        gdjs.SampleCode.GDNumeral1Objects1[k] = gdjs.SampleCode.GDNumeral1Objects1[i];
        ++k;
    }
}
gdjs.SampleCode.GDNumeral1Objects1.length = k;}if (gdjs.SampleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SampleCode.GDNumeral1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Numeral2"), gdjs.SampleCode.GDNumeral2Objects1);
{for(var i = 0, len = gdjs.SampleCode.GDNumeral1Objects1.length ;i < len;++i) {
    gdjs.SampleCode.GDNumeral1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SampleCode.GDNumeral2Objects1.length ;i < len;++i) {
    gdjs.SampleCode.GDNumeral2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).getChild("Draw").setNumber(0);
}}

}


};gdjs.SampleCode.eventsList4 = function(runtimeScene) {

{


gdjs.SampleCode.condition0IsTrue_0.val = false;
{
gdjs.SampleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("Draw")) == 1;
}if (gdjs.SampleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SwipeLine"), gdjs.SampleCode.GDSwipeLineObjects1);
{for(var i = 0, len = gdjs.SampleCode.GDSwipeLineObjects1.length ;i < len;++i) {
    gdjs.SampleCode.GDSwipeLineObjects1[i].drawLineV2(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("AX")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("AY")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("BX")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild("BY")), 3);
}
}}

}


};gdjs.SampleCode.eventsList5 = function(runtimeScene) {

{


gdjs.SampleCode.eventsList2(runtimeScene);
}


{


gdjs.SampleCode.eventsList3(runtimeScene);
}


{


gdjs.SampleCode.eventsList4(runtimeScene);
}


};

gdjs.SampleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SampleCode.GDAngleObjects1.length = 0;
gdjs.SampleCode.GDAngleObjects2.length = 0;
gdjs.SampleCode.GDAngleObjects3.length = 0;
gdjs.SampleCode.GDAngleObjects4.length = 0;
gdjs.SampleCode.GDNumeral1Objects1.length = 0;
gdjs.SampleCode.GDNumeral1Objects2.length = 0;
gdjs.SampleCode.GDNumeral1Objects3.length = 0;
gdjs.SampleCode.GDNumeral1Objects4.length = 0;
gdjs.SampleCode.GDNumeral2Objects1.length = 0;
gdjs.SampleCode.GDNumeral2Objects2.length = 0;
gdjs.SampleCode.GDNumeral2Objects3.length = 0;
gdjs.SampleCode.GDNumeral2Objects4.length = 0;
gdjs.SampleCode.GDDebugCheckObjects1.length = 0;
gdjs.SampleCode.GDDebugCheckObjects2.length = 0;
gdjs.SampleCode.GDDebugCheckObjects3.length = 0;
gdjs.SampleCode.GDDebugCheckObjects4.length = 0;
gdjs.SampleCode.GDControlSwipeObjects1.length = 0;
gdjs.SampleCode.GDControlSwipeObjects2.length = 0;
gdjs.SampleCode.GDControlSwipeObjects3.length = 0;
gdjs.SampleCode.GDControlSwipeObjects4.length = 0;
gdjs.SampleCode.GDDirectionYObjects1.length = 0;
gdjs.SampleCode.GDDirectionYObjects2.length = 0;
gdjs.SampleCode.GDDirectionYObjects3.length = 0;
gdjs.SampleCode.GDDirectionYObjects4.length = 0;
gdjs.SampleCode.GDDirectionXObjects1.length = 0;
gdjs.SampleCode.GDDirectionXObjects2.length = 0;
gdjs.SampleCode.GDDirectionXObjects3.length = 0;
gdjs.SampleCode.GDDirectionXObjects4.length = 0;
gdjs.SampleCode.GDDirectionFor8Objects1.length = 0;
gdjs.SampleCode.GDDirectionFor8Objects2.length = 0;
gdjs.SampleCode.GDDirectionFor8Objects3.length = 0;
gdjs.SampleCode.GDDirectionFor8Objects4.length = 0;
gdjs.SampleCode.GDDirectionFor4Objects1.length = 0;
gdjs.SampleCode.GDDirectionFor4Objects2.length = 0;
gdjs.SampleCode.GDDirectionFor4Objects3.length = 0;
gdjs.SampleCode.GDDirectionFor4Objects4.length = 0;
gdjs.SampleCode.GDLengthObjects1.length = 0;
gdjs.SampleCode.GDLengthObjects2.length = 0;
gdjs.SampleCode.GDLengthObjects3.length = 0;
gdjs.SampleCode.GDLengthObjects4.length = 0;
gdjs.SampleCode.GDIsDebugObjects1.length = 0;
gdjs.SampleCode.GDIsDebugObjects2.length = 0;
gdjs.SampleCode.GDIsDebugObjects3.length = 0;
gdjs.SampleCode.GDIsDebugObjects4.length = 0;
gdjs.SampleCode.GDSwipeLineObjects1.length = 0;
gdjs.SampleCode.GDSwipeLineObjects2.length = 0;
gdjs.SampleCode.GDSwipeLineObjects3.length = 0;
gdjs.SampleCode.GDSwipeLineObjects4.length = 0;
gdjs.SampleCode.GDCircleObjects1.length = 0;
gdjs.SampleCode.GDCircleObjects2.length = 0;
gdjs.SampleCode.GDCircleObjects3.length = 0;
gdjs.SampleCode.GDCircleObjects4.length = 0;
gdjs.SampleCode.GDWallTopObjects1.length = 0;
gdjs.SampleCode.GDWallTopObjects2.length = 0;
gdjs.SampleCode.GDWallTopObjects3.length = 0;
gdjs.SampleCode.GDWallTopObjects4.length = 0;
gdjs.SampleCode.GDWallLeftObjects1.length = 0;
gdjs.SampleCode.GDWallLeftObjects2.length = 0;
gdjs.SampleCode.GDWallLeftObjects3.length = 0;
gdjs.SampleCode.GDWallLeftObjects4.length = 0;

gdjs.SampleCode.eventsList5(runtimeScene);
return;

}

gdjs['SampleCode'] = gdjs.SampleCode;
