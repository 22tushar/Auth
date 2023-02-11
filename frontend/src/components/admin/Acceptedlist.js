import React from 'react';
import './requests.css'

const items =[
    {
        id: 1,
        cname: 'MS',
        skills: 'react',
        email:'ms@outlook.com'
      },
      {
        id: 1,
        cname: 'JP',
        skills: 'finance api',
        email:'js@outlook.com'
      },
      {
        id: 1,
        cname: 'GS',
        skills: 'database mining',
        email:'rels@outlook.com'
      },
]

const Acceptedlist = () => {
  return (
    <div className='section-center-people-search'>
      {items.map((listitem) => {
        const { id, cname,skills,email} = listitem;
        return (
          <article key={id} className='menu-item'>
            <img src='https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg' alt={cname} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{cname}</h4>
                <h4 className='price'>{skills}</h4>
                <h4 className="email">{email}</h4>
              </header>
            </div>
            <button className="sendrequest">Send Request</button>

          </article>
        );
      })}
    </div>
  );
};

export default Acceptedlist;