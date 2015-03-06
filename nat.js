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
        event.push('<div>');
        event.push('<div>', eventdata.Date, '</div>');
        event.push('<div>', eventdata.Time, '</div>');
        event.push('<div>', eventdata.Verses, '</div>');
        event.push('<div>', eventdata.Where, '</div>');
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
                {Date: "Sunday the 12th", Time: "1:00pm", Type: "Central League Game", Verses: "Stop Out", Where: "Seatoun Park" },
                {Date: "Sunday the 19th", Time: "1:00pm", Type: "Central League Game", Verses: "Stop Out", Where: "Seatoun Park" }
            ],
            May: [
                {Date: "Sunday the 6th", Time: "1:00pm", Type: "Central League Game", Verses: "Stop Out", Where: "Seatoun Park" }
            ],
            June: []
        };
        
        return data;
    },
    getmonths: function () {
        return ["April", "May", "June"];
    }
}