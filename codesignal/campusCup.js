// Dropbox holds a competition between schools called CampusCup. If you verify an email address
// from a college, university, or higher education institution, you earn 20 points toward your
// school's overall ranking. When a school receives at least 100 points, all of its registered
// members receive an additional 3 Gb of bonus space each. When the school receives at least 200
// points, its registered members receive an additional 8 Gb. If the school receives at least 300
// points, its members receive an additional 15 Gb. And finally, when a school receives at least
// 500 points, members receive an additional 25 Gb each.

// You are given n registered emails, all of them unique. Each email has the following
// format: "<name>@<domain>", where <name> and <domain> are non-empty strings consisting of
// lowercase letters and a '.'. Identical domains correspond to the same school and vice versa.

// Your task is to make a scoreboard, i.e. to sort the schools according to the amount of bonus
// space they each received (per student not in total). School A must be higher in the standings
// than school B if A received more space than B, or if they received equal number of gigabytes
// but the domain string of school A is lexicographically smaller than the one of school B.

// Examples

emails = ["john.doe@mit.edu", "admin@rain.ifmo.ru", "noname@mit.edu"]

// the output should be campusCup(emails) = ["mit.edu", "rain.ifmo.ru"].

// "mit.edu" scored 40 points, and "rain.ifmo.ru" just 20. Both universities got no additional space,
// so "mit.edu" must be higher in the standings because it is lexicographically smaller than "rain.ifmo.ru".

emails2 = ["b@harvard.edu", "c@harvard.edu", "d@harvard.edu", "e@harvard.edu", "f@harvard.edu",
"a@student.spbu.ru", "b@student.spbu.ru", "c@student.spbu.ru", "d@student.spbu.ru",
"e@student.spbu.ru", "f@student.spbu.ru", "g@student.spbu.ru"]

// the output should be campusCup(emails) = ["harvard.edu", "student.spbu.ru"].

// "harvard.edu" - 100 points, 3 Gb of additional space.
// "student.spbu.ru" - 140 points, also 3 Gb of additional space.

// "harvard.edu" must be higher in the standings because it is lexicographically smaller than "student.spbu.ru".

emails3 = ["a@rain.ifmo.ru", "b@rain.ifmo.ru", "c@rain.ifmo.ru", 
          "d@rain.ifmo.ru", "e@rain.ifmo.ru", "noname@mit.edu"]

// the output should be: campusCup(emails4) = ["rain.ifmo.ru", "mit.edu"]

// "mit.edu" - 20 points, no additional space.
// "rain.ifmo.ru" - 100 points, 3 Gb of additional space.

// Therefore, "rain.ifmo.ru" must be higher in the standings.

function campusCup(emails) {
    
    // make dict of email domains
    let domains = {}
    
    // loop through email array
            // regex to split name + domain
        // check if domain is in dict
            // if yes
                // add points
            // else
                // add to dict, add points

    for (let i = 0; i < emails.length; i++) {
        let domain = emails[i].split('@')[1]
        if (domain in domains) {
            domains[domain] += 20
        } else {
            domains[domain] = 20
        }
    }
    
    // convert domains to array
    let space = Object.entries(domains).map(array => {
        // map points to extra space
        if (array[1] <= 99){
            return [array[0], 0]
        }
        else if (array[1] <= 199) {
            return [array[0], 3]
        }
         else if (array[1] <= 299) {
            return [array[0], 8]
        }
         else if (array[1] <= 499) {
            return [array[0], 15]
        }
         else if (array[1] > 499) {
            return [array[0], 25]
        }
    })
    
    // sort schools by points first, then alpha if points are equal
    space.sort((a, b) => {
        if (a[1] < b[1]){
            return 1
        }
        else if (a[1] > b[1]){
            return -1
        }
        else {
            if (a[0] < b[0]){
                return -1
            } else {
                return 1
            }
        }
    })
    
    // strip points from array
    let schools = []
    space.forEach(entry => {
        schools.push(entry[0])
    })
    
    return schools
}

// ***************** Test Section *******************

console.log(campusCup(emails))
console.log(campusCup(emails2))
console.log(campusCup(emails3))

emails4 = ["a@rain.ifmo.ru",  "b@rain.ifmo.ru",  "c@rain.ifmo.ru",  "d@rain.ifmo.ru", 
"e@rain.ifmo.ru",  "f@rain.ifmo.ru",  "g@rain.ifmo.ru",  "h@rain.ifmo.ru",  "i@rain.ifmo.ru", 
"j@rain.ifmo.ru",  "k@rain.ifmo.ru",  "l@rain.ifmo.ru",  "m@rain.ifmo.ru",  "n@rain.ifmo.ru", 
"o@rain.ifmo.ru",  "p@rain.ifmo.ru",  "q@rain.ifmo.ru",  "r@rain.ifmo.ru",  "s@rain.ifmo.ru", 
"t@rain.ifmo.ru",  "u@rain.ifmo.ru",  "v@rain.ifmo.ru",  "w@rain.ifmo.ru",  "x@rain.ifmo.ru", 
"y@rain.ifmo.ru",  "a@mit.edu.ru",  "b@mit.edu.ru",  "c@mit.edu.ru",  "d@mit.edu.ru",  "e@mit.edu.ru",
"f@mit.edu.ru",  "g@mit.edu.ru",  "h@mit.edu.ru",  "i@mit.edu.ru",  "j@mit.edu.ru",  "k@mit.edu.ru",
"l@mit.edu.ru",  "m@mit.edu.ru",  "n@mit.edu.ru",  "o@mit.edu.ru"]

console.log(campusCup(emails4))