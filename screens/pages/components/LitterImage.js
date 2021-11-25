import React, { PureComponent } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    Image,
    ScrollView,
    View
} from 'react-native';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import TagsActionButton from './TagsActionButton';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LitterImage extends PureComponent {
    // ScrollView Image Props
    static defaultProps = {
        doAnimateZoomReset: false,
        maximumZoomScale: 2,
        minimumZoomScale: 1,
        zoomHeight: SCREEN_HEIGHT,
        zoomWidth: SCREEN_WIDTH
    };

    constructor(props) {
        super(props);

        this.state = {
            imageLoaded: false,
            isOverlayDisplayed: false
        };
    }

    _imageLoaded() {
        this.setState({ imageLoaded: true });
    }

    /**
     * Render the Image inside LitterPicker.Swiper
     *
     * This renders twice. Once when Swiper is created (imageLoaded false)
     *
     * and again when imageLoaded is true
     */
    render() {
        return (
            <View style={{ backgroundColor: 'black' }}>
                <Image
                    resizeMode="cover"
                    source={{ uri: this.props.photoSelected.uri }}
                    style={styles.image}
                    onLoad={this._imageLoaded.bind(this)}
                />

                <ActivityIndicator
                    style={styles.activityIndicator}
                    animating={!this.state.imageLoaded}
                />
                {this.state.isOverlayDisplayed && (
                    <View
                        style={{
                            position: 'absolute',
                            flex: 1,
                            backgroundColor: 'black',
                            opacity: 0.4,
                            width: SCREEN_WIDTH,
                            height: SCREEN_HEIGHT
                        }}
                    />
                )}

                <TagsActionButton
                    toggleOverlay={() => {
                        this.setState(previousState => ({
                            isOverlayDisplayed: !previousState.isOverlayDisplayed
                        }));
                    }}
                />
            </View>
        );
    }
}

const styles = {
    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    }
};

export default connect(
    null,
    actions
)(LitterImage);
