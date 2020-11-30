
gdjs.evtsExt__Swipe__Swipe = gdjs.evtsExt__Swipe__Swipe || {};

/**
 * Behavior generated from 
 * @class Swipe
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Swipe__Swipe.Swipe = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.Time = behaviorData.Time !== undefined ? behaviorData.Time : Number("0.15") || 0;
    this._behaviorData.MinLength = behaviorData.MinLength !== undefined ? behaviorData.MinLength : Number("100") || 0;
    this._behaviorData.PointStartX = Number("0") || 0;
    this._behaviorData.PointStartY = Number("0") || 0;
    this._behaviorData.PointEndX = Number("0") || 0;
    this._behaviorData.PointEndY = Number("0") || 0;
    this._behaviorData.Length = Number("0") || 0;
    this._behaviorData.DirectionX = Number("0") || 0;
    this._behaviorData.DirectionY = Number("0") || 0;
    this._behaviorData.SwipeStart = false;
    this._behaviorData.Angle = Number("0") || 0;
    this._behaviorData.Timer = Number("0") || 0;
    this._behaviorData.Done = false;
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Swipe::Swipe", gdjs.evtsExt__Swipe__Swipe.Swipe);

// Hot-reload:
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.updateFromBehaviorData = function(oldBehaviorData, newBehaviorData) {

    if (oldBehaviorData.Time !== newBehaviorData.Time)
        this._behaviorData.Time = newBehaviorData.Time;
    if (oldBehaviorData.MinLength !== newBehaviorData.MinLength)
        this._behaviorData.MinLength = newBehaviorData.MinLength;
    if (oldBehaviorData.PointStartX !== newBehaviorData.PointStartX)
        this._behaviorData.PointStartX = newBehaviorData.PointStartX;
    if (oldBehaviorData.PointStartY !== newBehaviorData.PointStartY)
        this._behaviorData.PointStartY = newBehaviorData.PointStartY;
    if (oldBehaviorData.PointEndX !== newBehaviorData.PointEndX)
        this._behaviorData.PointEndX = newBehaviorData.PointEndX;
    if (oldBehaviorData.PointEndY !== newBehaviorData.PointEndY)
        this._behaviorData.PointEndY = newBehaviorData.PointEndY;
    if (oldBehaviorData.Length !== newBehaviorData.Length)
        this._behaviorData.Length = newBehaviorData.Length;
    if (oldBehaviorData.DirectionX !== newBehaviorData.DirectionX)
        this._behaviorData.DirectionX = newBehaviorData.DirectionX;
    if (oldBehaviorData.DirectionY !== newBehaviorData.DirectionY)
        this._behaviorData.DirectionY = newBehaviorData.DirectionY;
    if (oldBehaviorData.SwipeStart !== newBehaviorData.SwipeStart)
        this._behaviorData.SwipeStart = newBehaviorData.SwipeStart;
    if (oldBehaviorData.Angle !== newBehaviorData.Angle)
        this._behaviorData.Angle = newBehaviorData.Angle;
    if (oldBehaviorData.Timer !== newBehaviorData.Timer)
        this._behaviorData.Timer = newBehaviorData.Timer;
    if (oldBehaviorData.Done !== newBehaviorData.Done)
        this._behaviorData.Done = newBehaviorData.Done;

    return true;
}

// Properties:
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1_2final = [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_2 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition2IsTrue_2 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() >= (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMinLength()) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDone(true);
}
}}

}


};gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8171420);
}
}}
if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointStartX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointStartY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointEndX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointEndY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSwipeStart(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLength(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTimer(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDone(false);
}
}}

}


};gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSwipeStart() ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_1.val ) {
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_2 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_1;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1_2final.length = 0;gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_2.val = false;
{
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_2.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_2.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_2.val = true;
}
}
{
gdjs.copyArray(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2);

for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimer() >= (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime()) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_2.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_2.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_2.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1_2final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1_2final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1_2final, gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1);
}
}
}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSwipeStart(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointEndX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPointEndY(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionX((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointEndX()) - (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointStartX()));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionY((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointEndY()) - (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointStartY()));
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLength((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Length((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}
{ //Subevents
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSwipeStart() ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTimer(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimer() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSwipeStart()) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSwipeStart(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDone(false);
}
}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointStartX()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointStartY()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointStartYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointEndX()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPointEndY()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.PointEndYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (1 / (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength())) * (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 0; }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (1 / (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength())) * (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength() > 0) ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 0; }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.DirectionYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLength(Math.ceil(Math.sqrt((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX()) * (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX()) + (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY()) * (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY()))));
}
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLength()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Length = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.LengthContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_2 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition2IsTrue_2 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle(Math.ceil(gdjs.toDegrees(Math.atan2(-((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX())) * (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY()), (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX()) * (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX())))));
}
}}

}


{



}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX() > 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY() > 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle(-((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle())));
}
}}

}


{



}


{

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2);
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_2 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX() < 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_2.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY() > 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_2.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_2.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_2.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2);
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_2 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_1;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX() < 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_2.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY() < 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_2.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_2.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_2.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1_1final, gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1);
}
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle(180 - (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle()));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX() > 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY() < 0 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle(360 - (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle()));
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle()); }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.Angle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.AngleContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Angle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 225 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 315 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "UP"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 45 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 135 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "DOWN"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 135 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 225 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "LEFT"; }}}

}


{

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 315 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 45 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1_1final, gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1);
}
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "RIGHT"; }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4Parties = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor4PartiesContext.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDone() ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDone(false);
}
}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDone = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.IsDoneContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext = {};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1= [];
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2= [];

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngle((gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Angle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 248 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 292 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "UP"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 68 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 121 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "DOWN"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 158 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 202 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "LEFT"; }}}

}


{

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 338 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 22 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1_1final, gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1);
}
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "RIGHT"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 202 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 248 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "UP-LEFT"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 292 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 338 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "UP-RIGHT"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 121 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 158 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "DOWN-LEFT"; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1);

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1 = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() >= 22 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() < 68 ) {
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[k] = gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = k;}}
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.conditionTrue_1.val = true && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_1.val && gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = "DOWN-RIGHT"; }}}

}


};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8Parties = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype.GetDirectionsFor8PartiesContext.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}


// Methods:

gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getTime = function() {
    return this._behaviorData.Time !== undefined ? this._behaviorData.Time : Number("0.15") || 0;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setTime = function(newValue) {
    this._behaviorData.Time = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getMinLength = function() {
    return this._behaviorData.MinLength !== undefined ? this._behaviorData.MinLength : Number("100") || 0;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setMinLength = function(newValue) {
    this._behaviorData.MinLength = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getPointStartX = function() {
    return this._behaviorData.PointStartX !== undefined ? this._behaviorData.PointStartX : Number("0") || 0;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setPointStartX = function(newValue) {
    this._behaviorData.PointStartX = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getPointStartY = function() {
    return this._behaviorData.PointStartY !== undefined ? this._behaviorData.PointStartY : Number("0") || 0;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setPointStartY = function(newValue) {
    this._behaviorData.PointStartY = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getPointEndX = function() {
    return this._behaviorData.PointEndX !== undefined ? this._behaviorData.PointEndX : Number("0") || 0;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setPointEndX = function(newValue) {
    this._behaviorData.PointEndX = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getPointEndY = function() {
    return this._behaviorData.PointEndY !== undefined ? this._behaviorData.PointEndY : Number("0") || 0;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setPointEndY = function(newValue) {
    this._behaviorData.PointEndY = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getLength = function() {
    return this._behaviorData.Length !== undefined ? this._behaviorData.Length : Number("0") || 0;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setLength = function(newValue) {
    this._behaviorData.Length = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getDirectionX = function() {
    return this._behaviorData.DirectionX !== undefined ? this._behaviorData.DirectionX : Number("0") || 0;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setDirectionX = function(newValue) {
    this._behaviorData.DirectionX = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getDirectionY = function() {
    return this._behaviorData.DirectionY !== undefined ? this._behaviorData.DirectionY : Number("0") || 0;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setDirectionY = function(newValue) {
    this._behaviorData.DirectionY = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getSwipeStart = function() {
    return this._behaviorData.SwipeStart !== undefined ? this._behaviorData.SwipeStart : false;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setSwipeStart = function(newValue) {
    this._behaviorData.SwipeStart = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getAngle = function() {
    return this._behaviorData.Angle !== undefined ? this._behaviorData.Angle : Number("0") || 0;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setAngle = function(newValue) {
    this._behaviorData.Angle = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getTimer = function() {
    return this._behaviorData.Timer !== undefined ? this._behaviorData.Timer : Number("0") || 0;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setTimer = function(newValue) {
    this._behaviorData.Timer = newValue;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._getDone = function() {
    return this._behaviorData.Done !== undefined ? this._behaviorData.Done : false;
};
gdjs.evtsExt__Swipe__Swipe.Swipe.prototype._setDone = function(newValue) {
    this._behaviorData.Done = newValue;
};
