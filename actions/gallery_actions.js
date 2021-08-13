import React from 'react';
import CameraRoll from '@react-native-community/cameraroll';

import {
    ADD_TAGS_TO_GALLERY_IMAGE,
    DELETE_SELECTED_GALLERY,
    DESELECT_ALL_GALLERY_PHOTOS,
    GALLERY_UPLOADED_SUCCESSFULLY,
    TOGGLE_IMAGES_LOADING,
    PHOTOS_FROM_GALLERY,
    REMOVE_TAG_FROM_GALLERY_PHOTO,
    TOGGLE_IMAGE_BROWSER,
    TOGGLE_SELECTED_GALLERY,
    ADD_GEOTAGGED_IMAGES
} from './types';

/**
 * Create or Update tags on a gallery image
 */
export const addTagsToGalleryImage = tags => {
    return {
        type: ADD_TAGS_TO_GALLERY_IMAGE,
        payload: tags
    };
};

/**
 * Delete selected gallery / camera roll photo
 */
export const deleteSelectedGallery = photo => {
    return {
        type: DELETE_SELECTED_GALLERY,
        payload: photo
    };
};

/**
 * Change selected => false on all gallery photos
 */
export const deselectAllGalleryPhotos = () => {
    return {
        type: DESELECT_ALL_GALLERY_PHOTOS
    };
};

/**
 * A Gallery Index has been uploaded successfully! - can be deleted.
 */
export const galleryPhotoUploadedSuccessfully = index => {
    return {
        type: GALLERY_UPLOADED_SUCCESSFULLY,
        payload: index
    };
};

/**
 * Toggle ActivityIndicator when Photo Albums are finished / loading
 */
export const setImagesLoading = bool => {
    return {
        type: TOGGLE_IMAGES_LOADING,
        payload: bool
    };
};

/**
 * get photos from camera roll
 */

export const getPhotosFromCameraroll = id => async dispatch => {
    const params = {
        // initially get first 100 images
        first: 1000
        // toTime: 1627819113000,
        // fromTime: 1626782313000
        // groupTypes: 'SavedPhotos',
        // assetType: 'Photos',
        // include: ['location']
    };

    const camerarollData = await CameraRoll.getPhotos(params);
    const imagesArray = camerarollData.edges;
    let geotagged = [];

    imagesArray.map(item => {
        id++;
        if (
            item.node?.location !== undefined &&
            item.node?.location?.longitude !== undefined &&
            item.node?.location?.latitude !== undefined
        ) {
            geotagged.push({
                id,
                filename: item.node.image.filename, // this will get hashed on the backend
                uri: item.node.image.uri,
                size: item.node.image.fileSize,
                height: item.node.image.height,
                width: item.node.image.width,
                lat: item.node.location.latitude,
                lon: item.node.location.longitude,
                timestamp: item.node.timestamp,
                selected: false,
                picked_up: false,
                tags: {},
                type: 'gallery'
            });
        }
    });

    console.log(`geotagged length ${geotagged.length}`);

    dispatch({
        type: 'ADD_GEOTAGGED_IMAGES',
        payload: geotagged
    });
};
/**
 * Add selected photos from gallery to redux
 */
export const photosFromGallery = photos => {
    return {
        type: PHOTOS_FROM_GALLERY,
        payload: photos
    };
};

/**
 * A tag has been selected from a gallery photo
 */
export const removeTagFromGalleryPhoto = data => {
    return {
        type: REMOVE_TAG_FROM_GALLERY_PHOTO,
        payload: data
    };
};

/**
 * Open or Close the Gallery Image Picker
 */
export const toggleImageBrowser = () => {
    return {
        type: TOGGLE_IMAGE_BROWSER
    };
};

/**
 * Toggle the value of a photo.selected
 */
export const toggleSelectedGallery = index => {
    return {
        type: TOGGLE_SELECTED_GALLERY,
        payload: index
    };
};

export const addGeotaggedImages = data => {
    return {
        type: ADD_GEOTAGGED_IMAGES,
        payload: data
    };
};
