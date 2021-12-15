// Import keys to authenticate with your Laravel backend
// See https://laravel.com/docs/8.x/passport#the-passportclient-command
import { SECRET_CLIENT } from '@env';
import { ID_CLIENT } from '@env';
import { OLM_ENDPOINT } from '@env';

export const IS_PRODUCTION = false; // change this when working locally to disable sentry

export const CLIENT_ID = ID_CLIENT;
export const CLIENT_SECRET = SECRET_CLIENT;
export const URL = OLM_ENDPOINT;

export const TOGGLE_ACTIVITY_INDICATOR = 'TOGGLE_ACTIVITY_INDICATOR';

// Auth
export const ACCOUNT_CREATED = 'ACCOUNT_CREATED';
export const CHANGE_LANG = 'CHANGE_LANG';
export const CHANGE_SERVER_STATUS_TEXT = 'CHANGE_SERVER_STATUS_TEXT;';
export const SUBMIT_START = 'SUBMIT_START';
export const SUBMIT_END = 'SUBMIT_END';
export const LOGIN_OR_SIGNUP_RESET = 'LOGIN_OR_SIGNUP_RESET';
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const EMAIL_INCORRECT = 'EMAIL_INCORRECT';
export const EMAIL_VALID = 'EMAIL_VALID';
export const PASSWORD_INCORRECT = 'PASSWORD_INCORRECT';
export const PASSWORD_VALID = 'PASSWORD_VALID';
export const EMAIL_ERROR = 'EMAIL_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const TOKEN_IS_VALID = 'TOKEN_IS_VALID';

// Images - Single array for Photos/Gallery/Web
export const ADD_IMAGES = 'ADD_IMAGES';
export const ADD_TAG_TO_IMAGE = 'ADD_TAG_TO_IMAGE';
export const DECREMENT_SELECTED = 'DECREMENT_SELECTED';
export const DELETE_IMAGE = 'DELETE_IMAGE';
export const DELETE_SELECTED_IMAGES = 'DELETE_SELECTED_IMAGES';
export const DESELECT_ALL_IMAGES = 'DESELECT_ALL_IMAGES';
export const INCREMENT_SELECTED = 'INCREMENT_SELECTED';
export const REMOVE_TAG_FROM_IMAGE = 'REMOVE_TAG_FROM_IMAGE';
export const TOGGLE_PICKED_UP = 'TOGGLE_PICKED_UP';
export const TOGGLE_SELECTING = 'TOGGLE_SELECTING';
export const TOGGLE_SELECTED_IMAGES = 'TOGGLE_SELECTED_IMAGES';

// Photos - Taken from OLM Camera

export const TOGGLE_IMAGES_LOADING = 'TOGGLE_IMAGES_LOADING';

export const LOGOUT = 'LOGOUT';
export const USER_FOUND = 'USER_FOUND';

export const CHECK_APP_VERSION = 'CHECK_APP_VERSION';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_LITTER = 'TOGGLE_LITTER';
export const TOGGLE_THANK_YOU = 'TOGGLE_THANK_YOU';
export const TOGGLE_UPLOAD = 'TOGGLE_UPLOAD';

export const INCREMENT = 'INCREMENT';

// CAMERA / PHOTOS (camera_photos)
export const SET_GPS_COORDINATES = 'SET_GPS_COORDINATES';

// gallery
export const ADD_GEOTAGGED_IMAGES = 'ADD_GEOTAGGED_IMAGES';
export const DELETE_GALLERY_UPLOAD_SUCCESS = 'DELETE_GALLERY_UPLOAD_SUCCESS';
export const REMOVE_ALL_SELECTED_GALLERY = 'REMOVE_ALL_SELECTED_GALLERY';

// Litter, Tags
export const ADD_PREVIOUS_TAG = 'ADD_PREVIOUS_TAG';
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_ITEM = 'CHANGE_ITEM';
export const CHANGE_Q = 'CHANGE_Q';
export const CHANGE_QUANTITY_STATUS = 'CHANGE_QUANTITY_STATUS';
export const CONFIRM_FOR_UPLOAD = 'CONFIRM_FOR_UPLOAD';
export const CHANGE_SWIPER_INDEX = 'CHANGE_SWIPER_INDEX';
export const REMOVE_PREVIOUS_TAG = 'REMOVE_PREVIOUS_TAG';
export const RESET_LITTER_STATE = 'RESET_LITTER_STATE';
export const SAVE_PREVIOUS_TAGS = 'SAVE_PREVIOUS_TAGS';
export const SHOW_ALL_TAGS = 'SHOW_ALL_TAGS';
export const SHOW_INNER_MODAL = 'SHOW_INNER_MODAL';
export const SUGGEST_TAGS = 'SUGGEST_TAGS';
export const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
export const UPDATE_PREVIOUS_TAGS = 'UPDATE_PREVIOUS_TAGS';
export const UPDATE_TAGS_X_POS = 'UPDATE_TAGS_X_POS';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// Settings
export const CLOSE_SECOND_SETTING_MODAL = 'CLOSE_SECOND_SETTING_MODAL';
export const SET_MODEL = 'SET_MODEL';
export const SETTINGS_INIT = 'SETTINGS_INIT';
export const SETTINGS_UPDATE_STATUS_MESSAGE = 'SETTINGS_UPDATE_STATUS_MESSAGE';
export const START_UPDATING_SETTINGS = 'START_UPDATING_SETTINGS';
export const TOGGLE_SETTINGS_MODAL = 'TOGGLE_SETTINGS_MODAL';
export const TOGGLE_SETTINGS_WAIT = 'TOGGLE_SETTINGS_WAIT';
export const UPDATE_SETTINGS_PROP = 'UPDATE_SETTINGS_PROP';
export const UPDATE_USER_OBJECT = 'UPDATE_USER_OBJECT';

// Shared

// Web data
export const LOAD_MORE_WEB_IMAGES = 'LOAD_MORE_WEB_IMAGES';

// Stats
export const STATS_REQUEST_SUCCESS = 'STATS_REQUEST_SUCCESS';
export const STATS_REQUEST_ERROR = 'STATS_REQUEST_ERROR';
