var bio = {
    name : "Basia",
    role : "hotel holder",
    contacts : {
        mobile: "660387523",
        email: "basiaczuba@wp.pl",
        github: "github",
        location: "Zakopane"
    },
    welcomeMessage: "Hello",
    skills: ['skiing', 'horse-riding', 'dog training', 'agility'],
    biopic: "bordery.pl",
    display: function (){
        alert('display');
    }
};

//adding iformations from the objects
var f_HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(f_HTMLheaderName);
var f_HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(f_HTMLheaderRole);
