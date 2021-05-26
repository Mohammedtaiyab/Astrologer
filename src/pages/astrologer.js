


const request=new XMLHttpRequest();
const astrologer=[];
request.open("GET","https://zodiac.dexteroot.ml/api/v1/astrologer/all");
request.send();
request.onload=()=>{
    if(request.status===200){
        // var astrologerslist=  astrologer.push(JSON.parse(request.response));
       // astrologer.push(JSON.parse(request.response));
    }
}

var list=[];
var astrologerdata=[];
var datadiv=document.getElementById("datastructure");
axios
.get("https://zodiac.dexteroot.ml/api/v1/astrologer/all")
.then(response => {
    astrologer.push(response.data);
    
        for (let i = 0; i < astrologer.length; i++) {
            const element = astrologer[i].all_astrologer;
                for (let j = 0; j < element.length; j++) {
                    const astro  = element[j];
                        
                        astrologerdata.push(astro);
                        console.log(astro);
                        var verified=astro.is_verified;
                        var verifiedtext='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-x mx-auto"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line></svg>';
                            if(verified==true){
                                verifiedtext='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check mx-auto"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>';
                            }
                        datadiv.innerHTML+='<div class="intro-y col-span-12 md:col-span-6 lg:col-span-4">'+
                        '<div class="box">'+
                        '<div class="flex items-start px-5 pt-5">'+
                        '<div class="w-full flex flex-col lg:flex-row items-center">'+
                        '<div class="w-16 h-16 image-fit">'+
                        '<img alt="Midone Tailwind HTML Admin Template" class="rounded-md" src="dist/images/profile-11.jpg">'+
                        '</div>'+
                        '<div class="lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">'+
                        '<a href="" class="font-medium">'+astro.name+'</a> '+
                        '<div class="text-gray-600 text-xs">'+astro.certifications[0].certificateName+'</div>'+
                        '</div>'+
                        '</div>'+
                        '<div class="absolute right-0 top-0 dropdown">'+
                        '<a class="dropdown-toggle w-5 h-5 block" href="javascript:;"> <i data-feather="more-horizontal" class="w-5 h-5 text-gray-700 dark:text-gray-300"></i> </a>'+
                        '<div class="dropdown-box w-40">'+
                        '<div class="dropdown-box__content box dark:bg-dark-1 p-2">'+
                        '<a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="edit-2" class="w-4 h-4 mr-2"></i> Edit </a>'+
                        '<a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="trash" class="w-4 h-4 mr-2"></i> Delete </a>'+
                        '</div>'+
                        '</div>'+
                        '</div>'+
                        '</div>'+
                        '<div class="text-center lg:text-left p-5">'+
                        '<div>'+astro.about+'</div>'+
                        '<div class="flex items-center justify-center lg:justify-start text-gray-600 mt-5"> <i data-feather="mail" class="w-3 h-3 mr-2"></i>'+astro.email+'</div>'+
                        '<div class="flex items-center justify-center lg:justify-start text-gray-600 mt-1"> <i data-feather="instagram" class="w-3 h-3 mr-2"></i> '+astro.address+' </div>'+
                        '</div>'+
                        '<div class="text-center lg:text-right p-5 border-t border-gray-200 dark:border-dark-5">'+
                        '<button class="button button--sm text-white bg-theme-1 mr-2">'+verifiedtext+'</button>'+
                        '<button class="button button--sm text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300">Profile</button>'+
                        '</div>'+
                        '</div>'+
                        '</div>';
                     


                }
        }

 
})
.catch(error => console.error(error));




