import React from 'react'
import Card from './Card';
import Slider from './Slider';

function AnimePage() {
    const products=[
        {
            id:1,
            name:'Have Mercy, Your Ladyship!',
            price:'1200 Rs',
            description:'Author Name: hotread',
            imge:'https://cn-e-pic-tencent.mangatoon.mobi/cartoon-posters/1035988a48e.webp-posterend1000',
        },
        {
            id:1,
            name:'The Supreme Sword Intention',
            price:'1200 Rs',
            description:'Author Name: Xiaomingtaiji',
            imge:'https://cn-e-pic-tencent.mangatoon.mobi/cartoon-posters/2362835d727.webp-posterend1000',
        },
        {
            id:1,
            name:'Devouring The Seas',
            price:'1200 Rs',
            description:'Author Name: Kuaikan Comics',
            imge:'https://cn-e-pic-tencent.mangatoon.mobi/cartoon-posters/16322079afc.webp-posterend1000',
        },
        {
            id:1,
            name:'WHO CARES',
            price:'1200 Rs',
            description:'Author Name: Kuaikan Comics',
            imge:'https://cn-e-pic-tencent.mangatoon.mobi/cartoon-posters/3446102f117.webp-posterend1000',
        },
        {
            id:1,
            name:'Trapped with the CEO',
            price:'1200 Rs',
            description:'Author Name: CHANGDU',
            imge:'https://cn-e-pic-tencent.mangatoon.mobi/cartoon-posters/139346a55a.webp-posterend1000',
        },
        {
            id:1,
            name:'Transient Tea',
            price:'1200 Rs',
            description:'Author Name: ManYu',
            imge:'https://cn-e-pic-tencent.mangatoon.mobi/cartoon-posters/1978ef17.webp-posterend1000',
        },
        {
            id:1,
            name:'2D Lover',
            price:'1200 Rs',
            description:'Author Name: iQiyi Comics',
            imge:'https://cn-e-pic-tencent.mangatoon.mobi/cartoon-posters/39216801f4a.webp',
        },
        {
            id:1,
            name:'Only Love',
            price:'1200 Rs',
            description:'Author Name: Kuaikan Comics',
            imge:'https://cn-e-pic-tencent.mangatoon.mobi/cartoon-posters/37279597b3e.webp-posterup4',
        },
        {
            id:1,
            name:'Marry One Get One Free',
            price:'1200 Rs',
            description:'Author Name: CHINA LITERATURE',
            imge:'https://cn-e-pic-tencent.mangatoon.mobi/cartoon-posters/14780343515.webp-posterend1000',
        },
        {
            id:1,
            name:'School Hunk Is A Girl',
            price:'1200 Rs',
            description:'Author Name: CHINA LITERATURE',
            imge:'https://cn-e-pic-tencent.mangatoon.mobi/cartoon-posters/14779932c0c.webp-posterup4',
        },

    ]
  return (
    <>
        <Slider/>
        <Card/>
        <h1 style={{textAlign:'center',marginTop:'25px'}}>Weekly Novel</h1>
        <div style={{display:'flex',flexWrap:'wrap',gap:'20px',marginLeft:'2rem',marginTop:'2rem',marginBottom:'2rem'}}>
            {products.map((product)=>(
                <div 
                    key={products.id}
                    style={{
                        border:'1px solid  rgb(11, 212, 247)',
                        padding:'16px',
                        width:'220px',
                        height:'300px',
                        textAlign:'center',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    }}
                    
                >
                    <img 
                     src={product.imge} 
                     alt={product.name} 
                     style={{
                        width:'70%',
                        borderRadius:'10px'}}

                     />
                    <h6>{product.name}</h6>
                    <p style={{fontSize:'11px'}}>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
      
            
    </>
  );
}

export default AnimePage;

