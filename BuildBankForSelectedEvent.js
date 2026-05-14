function buildBankForSelectedEvent() {

    e = studio.window.browserSelection();

    banks = [];

    e.forEach(function(event){
        if(event.isOfType("Event")) {
            bank = event.banks[0].name;
            // modal dialog confirm build with bank name
            if(banks.includes(bank)) { return; }
            
            banks.push(bank);
        }
    });

    ok = false;

    studio.ui.showModalDialog({
        windowTitle: 'Build Banks for Selected Event',
        widgetType: studio.ui.widgetType.Layout,
        widgetId: 'UI',
        layout: studio.ui.layoutType.VBoxLayout,
        items: [
            { widgetType: studio.ui.widgetType.Label, text: banks.join('\n').concat(" will be built, continue?") },

            {  //CheckBoxes Set 1
                widgetType: studio.ui.widgetType.Layout,
                layout: studio.ui.layoutType.HBoxLayout,
                alignment: studio.ui.alignment.AlignCenter,
                contentsMargins: { left: 0, top: 12, right: 0, bottom: 0 },
                items: [
                    { widgetType: studio.ui.widgetType.PushButton, text: "Ok", onClicked: function() { ok = true; this.closeDialog(); } },
                    { widgetType: studio.ui.widgetType.PushButton, text: "Cancel", onClicked: function() { ok = false; this.closeDialog(); } },
                ],
            },
        ],
    });

    // on ok then build the bank
    if(ok) {
        studio.project.build({banks: banks});
        console.log(banks.join('\n').concat(" built"));
        return;
    }
}

studio.menu.addMenuItem({
    name: "CCI\\Build Bank For Selected Event",
    execute: buildBankForSelectedEvent,
    keySequence: "Ctrl+Shift+9",
});
