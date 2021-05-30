import {
    ADD_PHOTO,
    LOAD_CAMERA_PHOTOS_FROM_ASYNC_STORAGE,
    CONFIRM_SESSION_TAGS,
    DELETE_SELECTED_PHOTO,
    DESELECT_ALL_CAMERA_PHOTOS,
    LOGOUT,
    INCREMENT,
    RESET_PHOTOS_TOTAL_TO_UPLOAD,
    RESET_SESSION_COUNT,
    CAMERA_PHOTO_UPLOADED_SUCCESSFULLY,
    TOGGLE_SELECTED_PHOTO,
    TOGGLE_SELECTING,
    UPDATE_PERCENT,
    UPDATE_COUNT_REMAINING,
    UPLOAD_COMPLETE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
    photos: [],
    progress: 0,
    isSelecting: false,
    remainingCount: 0,
    uniqueValue: 0
};

export default function(state = INITIAL_STATE, action) {

    switch(action.type)
    {
        /**
         * The user has manually taken a photo with the Camera
         */
        case ADD_PHOTO:

            let photos1 = [...state.photos];

            let id = 0;
            if (photos1.length > 0) id = photos1[photos1.length - 1].id + 1;

            photos1.push({
                id,
                lat: action.payload.lat,
                lon: action.payload.lon,
                uri: action.payload.result.uri,
                filename: action.payload.filename,
                date: action.payload.date,
                type: 'camera', // Photos taken from the camera
                selected: false,
                tags: {},
                picked_up: false
            });

            return {
                ...state,
                photos: photos1
            };

        case LOAD_CAMERA_PHOTOS_FROM_ASYNC_STORAGE:

            return {
                ...state,
                photos: action.payload
            };

        /**
         * Confirm the tags for a Photo taken from the Camera
         */
        case CONFIRM_SESSION_TAGS:

            let photos = [...state.photos];
            let photo1 = photos[action.payload.index];

            photo1.tags = action.payload.tags;
            photo1.picked_up = action.payload.picked_up;

            return {
                ...state,
                photos
            };

        /**
         * When isSelecting is turned off,
         *
         * Change selected value on every photo to false
         */
        case DESELECT_ALL_CAMERA_PHOTOS:

            let photos3 = [...state.photos];

            photos3 = photos3.map(photo => {
                photo.selected = false;

                return photo;
            });

            return {
                ...state,
                photos: photos3
            };

        case DELETE_SELECTED_PHOTO:
            return {
                ...state,
                photos: [
                    ...state.photos.slice(0, action.payload),
                    ...state.photos.slice(action.payload + 1)
                ],
                isSelecting: false
            };

        case INCREMENT:
            return {
                ...state,
                remainingCount: state.remainingCount + 1 // todo make immutable
            };

        // case ITEM_SELECTED:
        //   console.log("- photos reducer - item selected");
        //   console.log(action.payload);
        //   return {
        //     ...state,
        //     photoSelected: action.payload,
        //     modalVisible: true, // todo - make this immutable
        //     litterVisible: true, // todo - make this immutable
        //   };

        case LOGOUT:
            // return INITIAL_STATE;

        /**
         * When uploading reset x (x / total) to 0
         */
        case RESET_PHOTOS_TOTAL_TO_UPLOAD:
            return {
                ...state,
                totalCameraPhotosUploaded: 0
            };

        /**
         * Reset session count to 0 when all items uploaded successfully
         */
        case RESET_SESSION_COUNT:
            return {
                ...state,
                totalTaggedSessionCount: 0
            };

        /**
         * Change the selected value of a photo
         *
         * @payload action.payload = index
         * @param selected = bool
         */
        case TOGGLE_SELECTED_PHOTO:

            let photos2 = [...state.photos];

            let photo = photos2[action.payload];

            photo.selected = ! photo.selected;

            return {
                ...state,
                photos: photos2
            };

        /**
         * Session Photo + Data has been uploaded successfully
         */
        case CAMERA_PHOTO_UPLOADED_SUCCESSFULLY:
            return {
                ...state,
                photos: [
                    ...state.photos.slice(0, action.payload),
                    ...state.photos.slice(action.payload + 1)
                ],
                // total number of successfully uploaded photos can be incremented
                totalCameraPhotosUploaded: state.totalCameraPhotosUploaded +1,
            };

        case TOGGLE_SELECTING:
            // console.log('reducer - toggle selecting');
            return {
                ...state,
                isSelecting: ! state.isSelecting,
                uniqueValue: state.uniqueValue + 1
            };

        case UPDATE_COUNT_REMAINING:
            return {
                ...state,
                remainingCount: action.payload
            };

        case UPDATE_PERCENT:
            return {
                ...state,
                progress: action.payload
            };

        case UPLOAD_COMPLETE_SUCCESS:
            return {
                ...state,
                // modalVisible: action.payload.modal
            };

        // case UNIQUE_VALUE:
        //   return {
        //     ...state,
        //     uniqueValue: state.uniqueValue + 1
        //   };

        default:
            return state;
    }
}
