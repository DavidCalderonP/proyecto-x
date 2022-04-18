export var MenuConfig: Array<Menu> = [
  {
    name: 'Accounts',
    link_segment: 'accounts',
    children: [
      {
        name: 'Dashboard',
        link_segment: 'accounts/dashboard'
      },
      {
        name: 'Reports',
        link_segment: 'accounts/reports',
        children: [
          {
            name: 'Create Report',
            link_segment: 'accounts/reports/create'
          }
        ]
      }
    ]
  },
  {
    name: 'Activities',
    link_segment: 'activities',
  },
  {
    name: 'Contacts',
    link_segment: 'contacts'
  }
];

export interface Menu{
  name: string;
  link_segment: string;
  children?: Array<Menu>;
}
