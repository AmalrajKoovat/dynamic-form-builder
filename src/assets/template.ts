export const templateJSON = [
  {
    type: 'column',
    children: [
      {
        childId: 1,
        elements: [
          {
            type: 'number',
            label: 'Age',
            styles: {
              borderColor: 'blue',
              borderWidth: '2px',
              padding: '5px',
            },
            placeholder: 'Enter your age',
            value: null,
            validation: {
              required: true,
              min: 0,
              max: 120,
            },
          },
          {
            type: 'text',
            label: 'First Name',
            placeholder: 'Enter your first name',
            value: '',
            validation: {
              required: true,
              maxLength: 50,
            },
          },
          {
            type: 'date',
            label: 'Date of Birth',
            value: null,
            validation: {
              required: true,
            },
          },
        ],
      },
      {
        childId: 2,
        elements: [
          {
            type: 'textarea',
            label: 'Address',
            placeholder: 'Enter your address',
            styles: {
              border: '1px solid green',
            },
            value: '',
            validation: {
              required: false,
              maxLength: 300,
            },
          },
          {
            type: 'date',
            label: 'Date of Birth',
            value: null,
            validation: {
              required: true,
            },
          },
        ],
      },
      {
        childId: 3,
        elements: [
          {
            type: 'radio',
            label: 'Gender',
            value: null,
            options: [
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' },
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'tab',
    children: [
      {
        childId: 1,
        label: 'Personal Information',
        elements: [
          {
            type: 'text',
            label: 'First Name',
            placeholder: 'Enter your first name',
            value: '',
            styles: {
              color: 'blue',
              fontSize: '14px',
              width: '100%',
            },
          },
          {
            type: 'date',
            label: 'Date of Birth',
            value: null,
            styles: {
              backgroundColor: 'lightblue',
              width: '100%',
            },
          },
        ],
      },
      {
        childId: 2,
        label: 'Address',
        elements: [
          {
            type: 'textarea',
            label: 'Address',
            placeholder: 'Enter your address',
            value: '',
            styles: {
              border: '1px solid black',
              width: '100%',
            },
          },
        ],
      },
    ],
  },
  {
    type: 'image',
    file: 'assets/Christmas.jpg',
    styles: {
      width: '2000px',
      height: '1000px',
    },
  },
  {
    type: 'title',
    title: 'Sample Dynamic Form',
    styles: {},
  },
];
