function ReplaceItemsInMultiInst(params) {
    //Get Multi Inst Ref
    var multi = studio.window.editorSelection()[0];
    console.log(multi);
    
    //Check is multi
    if(multi.isOfType("MultiSound"))
    {
        var sounds = multi.sounds;
        
        //Clear Items in Multi Inst
        sounds.forEach(function(item)
        {
            studio.project.deleteObject(item);
        });
        
        //Get audioFiles from AssetBin
        var newSounds = studio.window.browserSelection();

        //Foreach
        newSounds.forEach(function(sound)
        {
            if (sound.isOfType("AudioFile")) {
	            //Create single inst from each audiofile
	            var inst = studio.project.create("SingleSound");
	            inst.audioFile = sound;
	            //assign to multi inst
	            multi.relationships.sounds.add(inst);
            }
        });
        //alert complete
    }
}


studio.menu.addMenuItem({
    name: "CCI\\Replace Items in Multi Inst",
    execute: ReplaceItemsInMultiInst,
    keySequence: "Ctrl+F2",
});