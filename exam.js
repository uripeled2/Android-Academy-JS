const topNStudentsAttendees = (students, attendees, N) => {
	let make_dict = () => {
        dict_s = {}
        for (student of students){
            dict_s[student] = 0
        }
        return dict_s
    }

    dict_s = make_dict()
    // console.log(dict_s) // DEBUG 

    // cuc score
    for (attendee of attendees){
        names = new Set()
        for (name of attendee){ // let name?
            if (names.has(name)){
                continue
            }
            
            names.add(name)

            if (!(dict_s[name] === undefined)){
                dict_s[name] += 1
            }
        } 
    }
    
    // console.log(dict_s) // DEBUG 

    // sort the dict
    // Create items array
    let items = Object.keys(dict_s).map(function(key) {
        return [key, dict_s[key]];
    });
    
    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    // console.log(items) // DEBUG 
    // for (item of items){
    //     console.log(item[0], item[1])
    // }

    return items.slice(0, N);

}

topNStudentsAttendees(["Eden", "Refael", "Yoni", "Nitzan", "Hadas"], [["Eden", "Refael", "Yoni", "Nitzan", "Hadas", "Ortal"], 
                                                                      ["Berry", "Nitzan", "Yoni", "Eden", "Hadas", "Ortal"], 
                                                                      ["Maxim", "Ortal", "Yoni", "Refael", "Nitzan", "Alex"], 
                                                                      ["Eden", "Andrew", "Yoni", "Nitzan", "Ortal","Nitzan"]], 3)
