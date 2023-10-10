module.exports = {
    name: "Wordcount",
    author: ["Aqusorias"],
    version: "1.0.0",
    changelog: "-",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "Message",
    
    html: function(data) {
        return `
        <div class="form-group">
        <label>Text to Count Words:</label>
        <div class="input-group mb-3">
            <textarea class="form-control field" name="text" id="text" rows="1" ></textarea>
            <div class="input-group-append">
                <a class="btn btn-outline-primary" role="button" id="variables" forinput="text">Insert Variable</a>
            </div>
        </div>

        <label>Save Variable as:</label>
        <input class="form-control needed-field" name="varName" id="varName"></input>
            <small class="form-text text-muted">NAME of the variable where content will be stored</small>
        </div>

        <div class="form-group">
            <label>Variable type:</label>
            <select class="form-control" name="varType">
            <option value="temp" selected>Temp Variable</option>
            <option value="server">Server Variable</option>
            <option value="global">Global Variable</option>
        </select>
        </div>
        `;
    },

    
    init: function (DBS) {
        if (!DBS.BetterMods) return console.log(`\x1b[36m [${this.name}.JS] \x1b[0m\x1b[31mBetterMods.js is not loaded. BetterMods.js is required to use this mod. \x1b[0m`);
        console.log('[MOD]' + '\x1b[36m' + ' ' + `${this.name}` + '\x1b[0m' + '\x1b[32m' + ' ' + `was successfully loaded on ` + '\x1b[0m' + '\x1b[31m' + `v${this.version}` + '\x1b[0m');
    },


    mod: function(DBS, message, action, args, command, index) {
        const messageText = DBS.BetterMods.parseAction(action.text, message);
        const wordCount = messageText.split(/\s+/).filter(word => word.length > 0).length;


        DBS.BetterMods.saveVar(action.vartype, action.varname, wordCount, message.guild);
        

        DBS.callNextAction(command, message, args, index + 1);
    }
};