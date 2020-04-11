//@input Component.ScriptComponent colorPickerScript
//@input Component.MaterialMeshVisual material

function changeValue(val){
    script.material.mainPass.threshold = Math.min(val, .999)
}
script.colorPickerScript.api.addCallback("onSliderValueChanged", changeValue)