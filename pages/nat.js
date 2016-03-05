var Nat = {
    currentmonth: "April",
    calendarmonths: new Array('January','February','March','April','May','June','July','August','September','October','November','December'),
    initialize:function () {
        this.setcurrentmonth();      
        var month = this.getcurrentmonth();
        this.rendermonth();
    },
    rendermonth: function () {
        var month = this.currentmonth
        var monthevents = this.getmonthevents(month);
        list = [];
        
        
        list.push('<table>');
        list.push('<tr class="titlemonth"><td>',month ,'</td><td>');
        if (this.haspreviousmonth()){
            list.push('<div class="leftarrow fa fa-caret-left"></div>');
        }
        if (this.hasnextmonth()){
            list.push('<div class="rightarrow fa fa-caret-right"></div>');
        }
                  
        list.push('</td></tr>');
            
        for (var i = 0; i < monthevents.length; i++ )
        {
            list.push('<tr><td colspan="2">');

            list.push(this.event(monthevents[i]))

            list.push('</td></tr>');
        }
        
        list.push('</table>');
        this.publishlist(list.join(''));
        this.attachEventHandlers();
    },
    backmonth: function() {
        var month = this.calendarmonths.indexOf(this.currentmonth)
        month -= 1;
        this.currentmonth = this.calendarmonths[month];
        this.rendermonth();
    },
    fowardmonth: function() {
        var month = this.calendarmonths.indexOf(this.currentmonth)
        month += 1;
        this.currentmonth = this.calendarmonths[month];
        this.rendermonth();
    },
    renderall: function () {
        var events = this.getevents();
        var months = this.getmonths();
        list = [];
        list.push('<table>');
        
        for (var i = 0; i < months.length; i++)
        {
            var games = events[months[i]];
            
            list.push('<tr class="titlemonth"><td>',months[i] ,'</td></tr>');
            for (var j = 0; j < games.length; j++ )
            {
                list.push('<tr><td colspan="2">');
                
                list.push(this.event(games[j]))
                
                list.push('</td></tr>');
            }
        }
        
        list.push('</table>');
        this.publishlist(list.join(''))
    },
    
    event: function(eventdata) {
        var event = [];
        event.push('<div class="eventbox">');
        
        event.push('<div class="leftbox">');
        event.push('<div>', "Date:", '</div>');
        event.push('<div>', "Time:", '</div>');
        event.push('<div>', "Verses:", '</div>');
        event.push('<div>', "Where:", '</div>');
        event.push('</div>');
        
        event.push('<div class="rightbox">');
        event.push('<div>', eventdata.Date, '</div>');
        event.push('<div>', eventdata.Time, '</div>');
        event.push('<div>', eventdata.Verses, '</div>');
        event.push('<div>', eventdata.Where, '</div>');
        event.push('</div>');
        
        event.push('</div>');
        
        return event.join('');
    },
    publishlist: function (html){
        $(".containerlist").html(html);
    },
    getmonthevents: function (month) {
        var events = this.getevents();
        return events[month];
    },
    
    getevents: function () {
        var data = {
            April: [
                {Date: "Monday the 3rd", Time: "1:00pm", Type: "Central League Game", Verses: "Wellington United", Where: "Newtown Park" },
                {Date: "Sunday the 10th", Time: "1:00pm", Type: "Central League Game", Verses: "Upper Hutt", Where: "Seatoun Park" },
                {Date: "Sunday the 17th", Time: "1:00pm", Type: "Central League Game", Verses: "Valeron", Where: "Palmerston North" },
                {Date: "Sunday the 24th", Time: "1:00pm", Type: "Kelly Cup", Verses: "Dunno", Where: "Dunno" }
            ],
            May: [
                {Date: "Sunday the 1st", Time: "1:00pm", Type: "Central League Game", Verses: "Marist", Where: "Seatoun Park" },
                {Date: "Sunday the 8th", Time: "1:00pm", Type: "Central League Game", Verses: "Stop Out", Where: "Seatoun Park" },
                {Date: "Sunday the 15th", Time: "1:00pm", Type: "ASB Cup", Verses: "Dunno", Where: "Dunno" },
                {Date: "Sunday the 22nd", Time: "1:00pm", Type: "Central League Game", Verses: "Moturoa", Where: "New Plymouth" },
                {Date: "Sunday the 29th", Time: "1:00pm", Type: "Central League Game", Verses: "Massy", Where: "Seatoun Park" }
            ],
            June: [
                {Date: "Sunday the 5th", Time: "1:00pm", Type: "ASB Cup", Verses: "Dunno", Where: "Dunno" },
                {Date: "Sunday the 12th", Time: "1:00pm", Type: "Central League Game", Verses: "Wellington United", Where: "Seatoun Park" },
                {Date: "Sunday the 19th", Time: "1:00pm", Type: "Central League Game", Verses: "Upper Hutt", Where: "Upper Hutt" },
                {Date: "Sunday the 26th", Time: "1:00pm", Type: "ASB Cup", Verses: "Dunno", Where: "Dunno" }
            ],
            July: [
                {Date: "Sunday the 3rd", Time: "1:00pm", Type: "Central League Game", Verses: "Veleron", Where: "Seatoun Park" },
                {Date: "Sunday the 10th", Time: "1:00pm", Type: "Central League Game", Verses: "Marist", Where: "Palmerston North" },
                {Date: "Sunday the 17th", Time: "1:00pm", Type: "Central League Game", Verses: "Stop Out", Where: "Petone" },
                {Date: "Sunday the 24th", Time: "1:00pm", Type: "Central League Game", Verses: "Moturoa", Where: "Seatoun Park" },
                {Date: "Sunday the 31st", Time: "1:00pm", Type: "Kelly Cup", Verses: "Dunno", Where: "Dunno" }
            ],
            August: [
                {Date: "Sunday the 7th", Time: "1:00pm", Type: "Central League Game", Verses: "Massey", Where: "Palmerston North" },
                {Date: "Sunday the 21st", Time: "1:00pm", Type: "Kelly Cup", Verses: "Dunno", Where: "Dunno" },
                {Date: "Sunday the 28th", Time: "1:00pm", Type: "ASB Cup", Verses: "Dunno", Where: "Dunno" }              
            ]
        };
        
        return data;
    },
    getmonths: function () {
        return ["April", "May", "June", "July", "August"];
    },
    setcurrentmonth:function() {
        var monthnum = new Date().getMonth();
        var month = this.calendarmonths[monthnum];
        
        var gamemonths = this.getmonths();
        this.currentmonth = (gamemonths.indexOf(month) != -1) ? month : gamemonths[0];
    },
    getcurrentmonth: function() {
        return (this.currentmonth) ? this.currentmonth : "April";
    },
    hasnextmonth: function() {
        var gamemonths = this.getmonths();  
        var spot = gamemonths.indexOf(this.currentmonth)
        return ((gamemonths.length - 1) > spot  && spot != -1 ) ? true : false;
    },
    haspreviousmonth: function() {
        var gamemonths = this.getmonths();  
        var spot = gamemonths.indexOf(this.currentmonth)
        return ( spot > 0 ) ? true : false;
    },
    attachEventHandlers: function () {
        $(".leftarrow").click(function(){
            Nat.backmonth();    
        });        
        $(".rightarrow").click(function(){
            Nat.fowardmonth();    
        });
    }
}