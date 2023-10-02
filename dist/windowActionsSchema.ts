export type WindowActions = {
    actions: Action[];
};

export type Action =
    | SetScreenAction
    | UpdateCoordinatesAction
    | AddElementAction
    | UpdateElementStatusAction
    | UnknownAction;

// Action to set the screen configuration
export type SetScreenAction = {
    actionType: 'set_screen';
    payload: Screen;
};

// Action to update coordinates of an element or window
export type UpdateCoordinatesAction = {
    actionType: 'update_coordinates';
    id: string; // ID of the element or window
    payload: Coordinates;
};

// Action to add an element
export type AddElementAction = {
    actionType: 'add_element';
    payload: Element;
};

// Action to update the status of an element
export type UpdateElementStatusAction = {
    actionType: 'update_element_status';
    id: string;
    status: 'enabled' | 'disabled' | 'focus';
};

// Action to catch unknown requests
export type UnknownAction = {
    actionType: 'unknown';
    text: string;
};

export type Screen = {
    width: number;
    height: number;
    dpi: number;
};

export type Coordinates = {
    x: number;
    y: number;
    width: number;
    height: number;
};

export type Element = {
    id: string;
    type: 'button' | 'text_field' | 'label';
    status?: 'enabled' | 'disabled' | 'focus';
    coordinates: Coordinates;
    actions?: string[];
    associated_with?: string[];
};

export type Window = {
    id: string;
    type: 'window';
    title: string;
    coordinates: Coordinates;
    elements: string[];
};
