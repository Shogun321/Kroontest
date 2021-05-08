/*import React from 'react';
import ProptTypes from 'prop-types';

GetList.ProptTypes = {
    listavlasnika: ProptTypes.array,
};
GetList.defaultProps = {
    listavlasnika:[],
};

function GetList(props){
    const {listavlasnika} = props;
    return (
        <ul className="post-list">
            {listavlasnika.map(post => (
                <li key={post.id}>avatar: <div className="korekcijaslike"><img src={`${post.owner.avatar_url}`} alt="Profile pic"></img></div> 
                                files: 
                </li>
            ))}
        </ul>
    );
}
export default GetList;
*/
import React from 'react';


//let uspeh;
const GetList = ({listavlasnika, loading}) => {
    /*for (const key in listavlasnika) {
        const element = listavlasnika[key];
        if(typeof element === "object" && typeof element != "null"){
            try {
                /*var keys = Object.keys(element);
                if(keys != null || keys != undefined)
                    console.log( keys[ 0 ] );*/
                //element.map(item => console.log(item.filename))
/*                function print(filename){
                    Object.keys(filename).map(item => uspeh=item);
                    //console.log(uspeh);
                    /*var keys = Object.keys(element.files);
                    if(keys != null || keys != undefined)
                        console.log( keys[ 0 ] );*/
/*                }
                print(element.files);
            } catch (error) {
                console.log(error);
            }
        } 
    }
*/
//Object.keys(listavlasnika).map(item => console.log(item));
    /*
    for (const key in listavlasnika) {
        if (Object.hasOwnProperty.call(listavlasnika, key)) {
            const element = listavlasnika[key];
            for (const key in element) {
                if (Object.hasOwnProperty.call(element, key)) {
                    const glupost = element[key];
                    console.log(typeof glupost);
                }
            }
        }
    }*/
    
    if(loading) {
        return <h2 className="loading">Loading...</h2>
    }
    return <ul className="post-list">
        {listavlasnika.map(post => (
             <li key={post.id}><div className="korekcijaslike"><img src={`${post.owner.avatar_url}`} alt="Profile pic"></img></div> 
             files: {Object.keys(post.files).map(item => item)}
            </li>
        ))}
    </ul>;
}

export default GetList;
