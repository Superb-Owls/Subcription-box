import React, { useState } from 'react';
import './style.css';
import data from './info'

function AboutContainer() {
    // state = {
    //     herosArray: data,
    //     showCollapsible: false,
    //     targetCollapsible: "",
    //     targetIndex: null
    // }

    const [state, setState] = useState({ studentArray: data, firstName: '', lastName: '', descriptionIndex: '' });

    function showDescription(i) {
        console.log('SHOW DESCRIPTION')
        setState({ ...state, descriptionIndex: i })

    }

    function hideDescription(i) {
        console.log('HIDE DESCRIPTION')
        setState({ ...state, descriptionIndex: '' })
    }

    //this component has a shared context between row 1 and 2 with showCollapsible, setCollapsible?
    function handleClick(e, studentName) {
        e.preventDefault();
        // paul
        // this.setState({ targetCollapsible: heroName, showCollapsible: true, targetIndex: e.target.index })
        //
        var newState = state.studentArray
        newState.map((student) => {
            if (student.name === studentName) {
                console.log('We found the match!!!!!', student)
                student['show-collapsible'] = true
            } else {
                student['show-collapsible'] = false
            }
        })

        setState({ ...state, studentArray: newState })

    }
    let comics = []
    console.log('this is the staet', state)
    return (
        <>
            {state.studentArray.map((student, comic, i) => {

                if (student['show-collapsible']) {
                    student.comics.map((comic, i) => {
                        const html = (


                            <div 
                            onMouseLeave={() => { hideDescription(i) }} 
                            onMouseEnter={() => 
                                { showDescription(i) }} className={comic} style={{
                                color: 'white',
                                //backgroundImage: `url(${comic.image})`,
                                backgroundSize: 'cover',
                                backgroundColor: 'grey',
                                
                                position: 'absolute',
                                width: '100%',
                                height: '219px',
                                marginTop: '406px',
                            }}
                            >
                                    
                                    <h1>{comic.email}</h1>
                                    <h1>{comic.github}</h1>
                                    <h1>{comic.linkedin}</h1>
                                {state.descriptionIndex === i ? (<div style={{
                                    
                                    // height: "100%",
                                    // width: '100%',
                                }}>
                                    {/* <h1>{comic.title}</h1>
                                    <h1>{comic.email}</h1>
                                    <h1>{comic.github}</h1>
                                    <h1>{comic.linkedin}</h1> */}
                                </div>) : ''}


                            </div>
                        )

                        comics.push(html)
                    })
                }
                return (
                    <>
                        <div key={i} className={`${student['grid-name']} heroCard`} onClick={(e) => { handleClick(e, student.name) }}>
                            <div className={"hoverImage hover" + `${student.index}`}></div>
                        </div>
                    </>
                )
            })}

            {comics}
        </>

    )
}
export default AboutContainer;