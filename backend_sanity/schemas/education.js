export default{
    name:'education',
    title:'Education',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'name',
        title:'name',
        type:'string'
     },
     {
         name:'college',
         title:'college',
         type:'string'
     },
     {
         name:'location',
         title:'Location',
         type:'string'
     },
     {
         name:'icon',
         title:'College Logo',
         type: 'image',
         options: {
           hotspot: true,
         },
     },
     {
        name:'bgColor',
        title:'BgColor',
        type:'string'
    },

]
}

