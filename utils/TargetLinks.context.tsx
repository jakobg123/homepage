import React from 'react';

const TargetLinks = React.createContext({
    showKnowledge: false,
    showInternship: false,
    setShowKnowledge: (trueBool: boolean) => { },
    setShowInternship: () => { },
    forceImportModules: () => { }
});

export class TargetLinksProvider extends React.Component {
    //function for toggling the video status and it's playback
    forceImportModules = () => {
        console.log("inne i fim");
        this.setState(state => ({ ...state, showKnowledge: true }));
        this.setState(state => ({ ...state, showInternship: true }));
    };

    setShowKnowledge = (trueBool: boolean) => {
        this.setState(state => ({ ...state, showKnowledge: trueBool }));
    }

    setShowInternship = () => {
        this.setState(state => ({ ...state, showInternship: true }));
    }
    // forceImportModules = () => {
    //     this.setState(
    //         state => ({
    //             ...state,
    //             status: state.status === 'playing' ? 'paused' : 'playing',
    //         }),
    //         () => this.playVideo()
    //     );
    // };

    //initial context value
    state = {
        showKnowledge: false,
        showInternship: false,
        forceImportModules: this.forceImportModules,
        setShowKnowledge: this.setShowKnowledge,
        setShowInternship: this.setShowInternship,
    };

    render() {
        return (
            //passing the state object as a value prop to all children
            <TargetLinks.Provider value={this.state}>
                {this.props.children}
            </TargetLinks.Provider>
        )
    }
}

export default TargetLinks;