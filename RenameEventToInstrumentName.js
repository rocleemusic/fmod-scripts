function RenameEventToInstName() {

    instance = studio.window.editorCurrent();

    if(instance.isOfType("SingleSound")) {
        var filename = instance.audioFile.assetPath;
        filename = filename.split(/(\\|\/)/g).pop();
        filename = filename.split(/(\.)/g)[0];

        var e = instance.audioTrack.event;

        e.name = filename;
    }

    if(instance.isOfType("MultiSound")) {
        var singlesound = instance.sounds[0]
        var filename = singlesound.audioFile.assetPath;
        filename = filename.split(/(\\|\/)/g).pop();
        filename = filename.split(/(\.)/g)[0];

        var e = instance.audioTrack.event;

        e.name = filename;
    }
};

studio.menu.addMenuItem({
    name: "CCI\\Rename Event To Instrument Name",
    execute: RenameEventToInstName,
    keySequence: "Shift+2",
});
