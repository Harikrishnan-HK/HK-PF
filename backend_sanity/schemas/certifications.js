
export default{
    name:'certifications',
    title:'Certifications',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'desc1',
            title:'Desc Line1',
            type:'string'
        },

        {
            name:'icon',
            title:'Icon',
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

