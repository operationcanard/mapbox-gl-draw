import runSetup from './src/setup';
import setupOptions from './src/options';
import setupAPI from './src/api';
import theme from './src/lib/theme';
import * as Constants from './src/constants';
import * as CommonSelectors from "./src/lib/common_selectors";
import isEventAtCoordinates from "./src/lib/is_event_at_coordinates";
import doubleClickZoom from "./src/lib/double_click_zoom";

const setupDraw = function(options, api) {
  options = setupOptions(options);

  const ctx = {
    options
  };

  api = setupAPI(ctx, api);
  ctx.api = api;

  const setup = runSetup(ctx);

  api.onAdd = setup.onAdd;
  api.onRemove = setup.onRemove;
  api.types = Constants.types;
  api.options = options;

  return api;
};

function MapboxDraw(options) {
  setupDraw(options, this);
}

import modes from './src/modes/index';
MapboxDraw.modes = modes;
MapboxDraw.theme = theme;
MapboxDraw.constants = Constants;
MapboxDraw.libs = { commonSelectors: CommonSelectors, isEventAtCoordinates, doubleClickZoom };



export default MapboxDraw;
