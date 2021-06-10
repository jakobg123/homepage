import { createContext } from 'react';

const ModalContext = createContext({
    // modalOpenContext: false,
    // setModalOpenContext: (modalOpenContext) => { }
    modalOpen: false,
    fadeOutElement: false,
    hideElement: false,
    // toggleModalOpen: (bool) => { },
    // passContentToModal: (any) => { },
    setModalContent: (any) => { },

});
// const HeroImage = React.createContext({
//     page: "start",
// });

// export class HeroImageProvider extends React.Component {

//     setPageForHeroImage = (page) => {
//         this.setState({page: page})
//     }

//     state = {
//         page: "start"
//     };

//     render() {
//         return (
//             //passing the state object as a value prop to all children
//             <HeroImage.Provider value={"Start"}>
//                 {this.props.children}
//             </HeroImage.Provider>
//         )
//     }
// }

export default ModalContext;
