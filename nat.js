var Nat = {
    initialize:function () {
        this.renderlist();
    },
    renderlist: function () {
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
                list.push('<tr><td>');
                
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
    getevents: function () {
        var data = {
            April: [
                {Date: "Monday the 6th", Time: "1:00pm", Type: "Central League Game", Verses: "Stop Out", Where: "Seatoun Park" },
                {Date: "Sunday the 12th", Time: "1:00pm", Type: "Central League Game", Verses: "Valeron", Where: "Palmerston North" },
                {Date: "Sunday the 19th", Time: "1:00pm", Type: "Central League Game", Verses: "Moturoa", Where: "Seatoun Park" },
                {Date: "Sunday the 26th", Time: "1:00pm", Type: "ASB Cup", Verses: "Dunno", Where: "Dunno" }
            ],
            May: [
                {Date: "Sunday the 3rd", Time: "1:00pm", Type: "Central League Game", Verses: "BNU", Where: "Seatoun Park" },
                {Date: "Sunday the 10th", Time: "1:00pm", Type: "ASB Cup", Verses: "Dunno", Where: "Dunno" },
                {Date: "Sunday the 17th", Time: "1:00pm", Type: "Central League Game", Verses: "Massey", Where: "Palmerston North" },
                {Date: "Sunday the 24th", Time: "1:00pm", Type: "Central League Game", Verses: "Wellington United", Where: "Newtown Park" },
                {Date: "Sunday the 31st", Time: "1:00pm", Type: "Central League Game", Verses: "Dunno", Where: "Dunno" }
            ],
            June: [
                {Date: "Sunday the 7th", Time: "1:00pm", Type: "Central League Game", Verses: "Upper Hutt", Where: "Seatoun Park" },
                {Date: "Sunday the 21st", Time: "1:00pm", Type: "Central League Game", Verses: "Dunno", Where: "Dunno" },
                {Date: "Sunday the 28th", Time: "1:00pm", Type: "Central League Game", Verses: "Valeron", Where: "Seatoun Park" }
            ],
            July: [
                {Date: "Sunday the 5th", Time: "1:00pm", Type: "Central League Game", Verses: "Stop Out", Where: "The Hutt Somewhere" },
                {Date: "Sunday the 12th", Time: "1:00pm", Type: "Central League Game", Verses: "Moturoa", Where: "New Plymouth" },
                {Date: "Sunday the 19th", Time: "1:00pm", Type: "Central League Game", Verses: "BNU", Where: "Brooklyn" },
                {Date: "Sunday the 26th", Time: "1:00pm", Type: "Central League Game", Verses: "Massey", Where: "Seatoun Park" }
            ],
            August: [
                {Date: "Sunday the 9th", Time: "1:00pm", Type: "Central League Game", Verses: "Upper Hutt", Where: "Upper Hutt" },
                {Date: "Sunday the 15th", Time: "1:00pm", Type: "Central League Game", Verses: "Wellington United", Where: "Seatoun Park" }                 ]
        };
        
        return data;
    },
    getmonths: function () {
        return ["April", "May", "June", "July", "August"];
    }
}