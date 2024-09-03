export default {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {name: 'name', title: 'name', type: 'string'},
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'desc1',
      title: 'Desc Line1',
      type: 'string',
    },
    {
      name: 'desc2',
      title: 'Desc Line2',
      type: 'string',
    },
    {
      name: 'desc3',
      title: 'Desc Line3',
      type: 'string',
    },
    {
      name: 'desc4',
      title: 'Desc Line4',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
