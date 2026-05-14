function CreateEventBank()
{
    var events = studio.window.browserSelection();

    // var bankName = events[0].name;

    events.forEach(function(event){
        var newBank = studio.project.create("Bank");
        newBank.name = event.name;
        event.relationships.banks.add(studio.project.lookup(newBank.id));
    });

}


studio.menu.addMenuItem({
    name: "CCI\\Create Event Bank",
    execute: CreateEventBank,
    keySequence: "Ctrl+Shift+E",
});

/*
group or individual?
get event name
create bank
name bank
get bank id
assign bank to event

        PATH = studio.system.getText("Please provide source file path:");

*/
