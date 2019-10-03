import { createGlobalStyle } from 'styled-components';
import { color } from 'weaveworks-ui-components/lib/theme/selectors';

const GlobalStyle = createGlobalStyle`
  /* sass-lint:disable variable-for-property */
  @font-face {
    font-family: 'proxima-nova';
    src: url('../fonts/proximanova-regular.woff');
  }

  @font-face {
    font-family: 'Roboto Mono';
    src: url('../fonts/robotomono-regular.ttf');
  }
  /* sass-lint:enable variable-for-property */

  a {
    text-decoration: none;
  }

  .browsehappy {
    margin: 0.2em 0;
    background: $color-gray-200;
    color: $color-black;
    padding: 0.2em 0;
  }

  /* add this class to truncate text with ellipsis, container needs width */
  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .colorable {
    transition: background-color .3s $base-ease;
  }

  .palable {
    transition: all .2s $base-ease;
  }

  .hideable {
    transition: opacity .5s $base-ease;
  }

  .blinkable {
    animation: blinking 1.5s infinite $base-ease;
  }

  .hang-around {
    transition-delay: .5s;
  }

  /* From https://stackoverflow.com/a/18294634 */
  .fully-pannable {
    width: 100%;
    height: 100%;
    /* Grabbable */
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    &.panning {
      /* Grabbing */
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
  }

  .shadow-2 {
    box-shadow: 0 3px 10px transparentize($color-black, 0.84), 0 3px 10px transparentize($color-black, 0.77);
  }

  .shadow-3 {
    box-shadow: 0 10px 30px transparentize($color-black, 0.81), 0 6px 10px transparentize($color-black, 0.77);
  }

  .overlay {
    @extend .hideable;

    background-color: $color-white;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    z-index: $layer-modal;

    &.faded {
      /* NOTE: Not sure if we should block the pointer events here.. */
      pointer-events: all;
      cursor: wait;
      opacity: 0.5;
    }
  }

  .overlay-wrapper {
    align-items: center;
    background-color: transparentize($color-purple-25, 0.1);
    border-radius: $border-radius-soft;
    color: $text-tertiary-color;
    display: flex;
    font-size: $font-size-tiny;
    justify-content: center;
    padding: 5px;
    position: fixed;
    bottom: 11px;

    button {
      @extend .btn-opacity;
      background-color: transparent;
      border: 1px solid transparent;
      border-radius: $border-radius-soft;
      color: $text-secondary-color;
      cursor: pointer;
      line-height: 20px;
      padding: 1px 3px;
      outline: 0;

      i {
        font-size: $font-size-small;
        position: relative;
        top: 2px;
      }

      &:hover, &.selected {
        border: 1px solid $text-tertiary-color;
      }

      &.active {
        & > * { @extend .blinkable; }
        border: 1px solid $text-tertiary-color;
      }
    }
  }

  .btn-opacity {
    @extend .palable;
    opacity: $btn-opacity-default;
    &-selected {
      opacity: $btn-opacity-selected;
    }
    &[disabled] {
      cursor: default;
      opacity: $btn-opacity-disabled;
    }
    &:not([disabled]):hover {
      opacity: $btn-opacity-hover;
    }
  }

  .hide {
    opacity: 0;
  }

  .scope-app, .terminal-app {
    -webkit-font-smoothing: antialiased;
    background: $body-background-color;
    bottom: 0;
    color: $text-color;
    font-family: $font-family-regular;
    font-size: $font-size-small;
    height: auto;
    left: 0;
    line-height: 150%;
    margin: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;

    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }
    *:before,
    *:after {
      box-sizing: border-box;
    }

    p {
      line-height: 20px;
      padding-top: 6px;
      margin-bottom: 14px;
      letter-spacing: 0;
      font-weight: 400;
      color: $text-color;
    }

    h2 {
      font-size: $font-size-extra-large;
      line-height: 40px;
      padding-top: 8px;
      margin-bottom: 12px;
      font-weight: 400;
    }

    &.time-travel-open {
      .details-wrapper {
        margin-top: $timeline-height + 50px;
      }
    }
  }

  .header {
    background-color: transparentize($color-purple-25, 0.2);
    z-index: $layer-front;
    padding: 15px 10px 0;
    position: relative;
    width: 100%;

    .selectors {
      display: flex;
      position: relative;

      > * {
        flex: 1 1;
      }

      .logo {
        margin: -16px 0 0 8px;
        height: 64px;
        max-width: 250px;
        min-width: 0;
      }
    }
  }


  .rc-slider {
    .rc-slider-step { cursor: pointer; }
    .rc-slider-track { background-color: $text-tertiary-color; }
    .rc-slider-rail { background-color: $border-light-color; }
    .rc-slider-handle { border-color: $text-tertiary-color; }
  }

  .footer {
    @extend .overlay-wrapper;
    right: 43px;

    &-status {
      margin-right: 1em;
    }

    &-label, .pause-text {
      margin: 0 0.25em;
    }

    &-versionupdate {
      margin-right: 0.5em;
    }

    &-tools {
      display: flex;
    }

    &-icon {
      margin-left: 0.5em;
    }

    .tooltip-wrapper {
      position: relative;

      .tooltip {
        display: none;
        background-color: $color-black;
        position: absolute;
        color: $color-white;
        text-align: center;
        line-height: 22px;
        border-radius: $border-radius-soft;
        font-size: $font-size-tiny;
        margin-bottom: 25px;
        margin-left: -4px;
        opacity: 0.75;
        padding: 10px 20px;
        bottom: 0;
        left: 10px;
        transform: translateX(-50%);
        white-space: nowrap;
        z-index: $layer-tooltip;

        /* Adjusted from http://www.cssarrowplease.com/ */
        &:after {
          border: 6px solid transparent;
          content: ' ';
          top: 100%;
          left: 50%;
          height: 0;
          width: 0;
          position: absolute;
          border-color: transparent;
          border-top-color: $color-black;
          margin-left: -6px;
        }
      }

      &:hover .tooltip {
        display: block;
      }
    }
  }

  .zoomable-canvas svg {
    @extend .fully-pannable;
  }

  .topologies-selector {
    margin: 0 4px;
    display: flex;

    .topologies-item {
      margin: 0px 8px;

      &-label {
        font-size: $font-size-normal;
      }

    }

    .topologies-sub {
      &-item {
        &-label {
          font-size: $font-size-small;
        }
      }
    }

    .topologies-item-main,
    .topologies-sub-item {
      pointer-events: all;
      color: $text-secondary-color;
      @extend .btn-opacity;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: $border-radius-soft;
      opacity: 0.9;
      margin-bottom: 3px;
      border: 1px solid transparent;
      white-space: nowrap;

      &-active, &:hover {
        color: $text-color;
        background-color: $background-darker-color;
      }

      &-active {
        opacity: 0.85;
      }

      &-matched {
        border-color: $color-blue-400;
      }

    }

    .topologies-sub-item {
      padding: 2px 8px;
    }

  }

  .nodes-chart-overlay {
    pointer-events: none;
    opacity: $node-elements-in-background-opacity;

    &:not(.active) {
      display: none;
    }
  }

  .nodes-chart, .nodes-resources {

    &-error, &-loading {
      @extend .hideable;
      pointer-events: none;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -16.5%;
      margin-top: -275px;
      color: $text-secondary-color;
      width: 33%;
      height: 550px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      .heading {
        font-size: $font-size-normal;
      }

      &-icon {
        text-align: center;
        opacity: 0.25;
        font-size: $overlay-icon-size;
      }

      li { padding-top: 5px; }
    }

    /* Make watermarks blink only if actually shown (otherwise the FF performance decreses weirdly). */
    &-loading:not(.hide) &-error-icon-container {
      @extend .blinkable;
    }

    &-loading {
      text-align: center;
    }

    svg {
      @extend .hideable;
      position: absolute;
      top: 0px;
    }

    .logo {
      display: none;
    }

    svg.exported {
      .logo {
        display: inline;
      }
    }

    text {
      font-family: $font-family-regular;
      fill: $text-secondary-color;
    }

    .nodes-chart-elements .matched-results {
      background-color: $label-background-color;
    }

    .edge {
      .link-none {
        fill: none;
        display: none;
      }
      .link-storage {
        fill: none;
        stroke: $edge-color;
        stroke-dasharray: 1, 30;
        stroke-linecap: round;
      }
      .link {
        fill: none;
        stroke: $edge-color
      }
      .shadow {
        fill: none;
        stroke: $color-blue-400;
        stroke-opacity: 0;
      }
      &.highlighted {
        .shadow {
          stroke-opacity: $edge-highlight-opacity;
        }
      }
    }

    .edge-marker {
      color: $edge-color;
      fill: $edge-color;
    }
  }

  .matched-results {
    text-align: center;

    &-match {
      font-size: $font-size-small;

      &-wrapper {
        display: inline-block;
        margin: 1px;
        padding: 2px 4px;
        background-color: transparentize($color-blue-400, 0.9);
      }

      &-label {
        color: $text-secondary-color;
        margin-right: 0.5em;
      }
    }

    &-more {
      font-size: $font-size-tiny;
      color: $color-blue-700;
      margin-top: -2px;
    }
  }

  .details {
    &-wrapper {
      position: fixed;
      display: flex;
      z-index: $layer-toolbar;
      right: $details-window-padding-left;
      top: 100px;
      bottom: 48px;
      transition: transform 0.33333s cubic-bezier(0,0,0.21,1), margin-top .15s $base-ease;
    }
  }

  .node-details {
    height: 100%;
    width: $details-window-width;
    background-color: transparentize($color-white, 0.14);
    display: flex;
    flex-flow: column;
    margin-bottom: 12px;
    padding-bottom: 2px;
    border-radius: $border-radius-soft;
    background-color: $color-white;
    @extend .shadow-2;
    /* keep node-details above the terminal. */
    z-index: $layer-front;
    overflow: hidden;

    &:last-child {
      margin-bottom: 0;
    }

    &-tools-wrapper {
      position: relative;
    }


    &-tools {
      position: absolute;
      top: 6px;
      right: 8px;

      .close-details {
        position: relative;
        z-index: $layer-front;
      }

      > i {
        @extend .btn-opacity;
        padding: 4px 5px;
        margin-left: 2px;
        font-size: $font-size-normal;
        color: $color-white;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: $border-radius-soft;

        span {
          font-family: $font-family-regular;
          font-size: $font-size-small;
          margin-left: 4px;

          span {
            text-transform: capitalize;
            font-size: $font-size-normal;
            margin-left: 0;
          }
        }

        &:hover {
          border-color: transparentize($color-white, 0.4);
        }
      }
    }

    .match {
      background-color: transparentize($color-blue-400, 0.7);
      border: 1px solid $color-blue-400;
    }

    &-header {
      @extend .colorable;

      &-wrapper {
        padding: 36px 36px 8px 36px;
      }

      &-label {
        color: $color-white;
        margin: 0;
        width: 348px;
        padding-top: 0;
      }

      .details-tools {
        position: absolute;
        top: 16px;
        right: 24px;
      }

      &-notavailable {
        background-color: $background-dark-color;
      }

    }

    &-relatives {
      margin-top: 4px;
      font-size: $font-size-normal;
      color: $color-white;

      &-link {
        @extend .truncate;
        @extend .btn-opacity;
        display: inline-block;
        margin-right: 0.5em;
        cursor: pointer;
        text-decoration: underline;
        opacity: $link-opacity-default;
        max-width: 12em;
      }

      &-more {
        @extend .btn-opacity;
        padding: 0 2px;
        cursor: pointer;
        font-size: $font-size-tiny;
        font-weight: bold;
        display: inline-block;
        position: relative;
        top: -5px;
      }
    }

    &-controls {
      white-space: nowrap;
      padding: 8px 0;
      font-size: $font-size-small;

      &-wrapper {
        padding: 0 36px 0 32px;
      }

      .node-control-button {
        color: $color-white;
      }

      &-spinner {
        @extend .hideable;
        color: $color-white;
        margin-left: 8px;
      }

      &-error {
        @extend .truncate;
        float: right;
        width: 55%;
        padding-top: 6px;
        text-align: left;
        color: $color-white;

        &-icon {
          @extend .blinkable;
          margin-right: 0.5em;
        }
      }
    }

    &-content {
      flex: 1;
      padding: 0 36px 0 36px;
      overflow-y: auto;

      &-loading {
        margin-top: 48px;
        text-align: center;
        font-size: $font-size-huge;
        color: $text-tertiary-color;
      }

      &-section {
        margin: 16px 0;

        &-header {
          font-size: $font-size-normal;
          color: $text-tertiary-color;
          margin-bottom: 10px;
        }
      }
    }

    &-health {

      &-wrapper {
        display: flex;
        justify-content: space-around;
        align-content: center;
        text-align: center;
        flex-wrap: wrap;
      }

      &-overflow {
        @extend .btn-opacity;
        flex-basis: 33%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        opacity: 0.85;
        cursor: pointer;
        position: relative;
        padding-bottom: 16px;

        &-item {
          padding: 4px 8px;
          line-height: 1.2;
          flex-basis: 48%;

          &-value {
            color: $text-secondary-color;
            font-size: $font-size-normal;
          }

          &-label {
            color: $text-secondary-color;
            font-size: $font-size-tiny;
          }
        }
      }

      &-item {
        padding: 8px 16px;
        width: 33%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        &-label {
          color: $text-secondary-color;
          font-size: $font-size-small;
        }

        &-sparkline {
          margin-top: auto;
        }

        &-placeholder {
          font-size: $font-size-extra-large;
          opacity: 0.2;
          margin-bottom: 0.2em;
        }
      }

      &-link-item {
        @extend .btn-opacity;
        cursor: pointer;
        opacity: $link-opacity-default;
        width: 33%;
        display: flex;
        color: inherit;

        .node-details-health-item {
          width: auto;
        }
      }
    }

    &-info {

      &-field {
        display: flex;
        align-items: baseline;

        &-label {
          text-align: right;
          width: 30%;
          color: $text-secondary-color;
          padding: 0 0.5em 0 0;
          white-space: nowrap;
          font-size: $font-size-small;

          &::after {
            content: ':';
          }
        }

        &-value {
          font-size: $font-size-small;
          flex: 1;
          /* Now required (from chrome 48) to get overflow + flexbox behaving: */
          min-width: 0;
          color: $text-color;
        }
      }
    }

    &-property-list {
      &-controls {
        margin-left: -4px;
      }

      &-field {
        display: flex;
        align-items: baseline;

        &-label {
          text-align: right;
          width: 50%;
          color: $text-secondary-color;
          padding: 0 0.5em 0 0;
          white-space: nowrap;
          font-size: $font-size-small;

          &::after {
            content: ':';
          }
        }

        &-value {
          font-size: $font-size-small;
          flex: 1;
          /* Now required (from chrome 48) to get overflow + flexbox behaving: */
          min-width: 0;
          color: $text-color;
        }
      }
    }

    &-generic-table {
      width: 100%;

      tr {
        display: flex;
        th, td {
          padding: 0 5px;
        }
      }
    }

    &-table {
      width: 100%;
      border-spacing: 0;
      /* need fixed for truncating, but that does not extend wide columns dynamically */
      table-layout: fixed;

      &-wrapper {
        margin: 24px -4px;
      }

      &-header {
        color: $text-tertiary-color;
        font-size: $font-size-small;
        text-align: right;
        padding: 0;

        .node-details-table-header-sortable {
          padding: 3px 4px;
          cursor: pointer;
        }

        &-sorted {
          color: $text-secondary-color;
        }

        &-sorter {
          margin: 0 0.35em;
        }

        &:first-child {
          margin-right: 0;
          text-align: left;
        }
      }

      tbody {
        position: relative;

        .min-height-constraint {
          position: absolute;
          width: 0 !important;
          opacity: 0;
          top: 0;
        }
      }

      &-node {
        font-size: $font-size-small;
        line-height: 1.5;

        &:hover, &.selected {
          background-color: $color-white;
        }

        > * {
          padding: 0 4px;
        }

        &-link {
          @extend .btn-opacity;
          text-decoration: underline;
          cursor: pointer;
          opacity: $link-opacity-default;
          color: $text-color;
        }

        &-value, &-metric {
          flex: 1;
          margin-left: 0.5em;
          text-align: right;
        }

        &-metric-link {
          @extend .btn-opacity;
          text-decoration: underline;
          cursor: pointer;
          opacity: $link-opacity-default;
          color: $text-color;
        }

        &-value-scalar {
          /* width: 2em; */
          text-align: right;
          margin-right: 0.5em;
        }

        &-value-minor,
        &-value-unit {
          font-size: $font-size-small;
          color: $text-secondary-color;
        }
      }
    }
  }



  .node-resources {
    &-metric-box {
      @extend .palable;
      cursor: pointer;
      fill: transparentize($color-gray-600, 0.6);

      &-info {
        background-color: transparentize($color-white, 0.4);
        border-radius: $border-radius-soft;
        cursor: inherit;
        padding: 5px;

        .wrapper {
          display: block;

          &.label { font-size: $font-size-small; }
          &.consumption { font-size: $font-size-tiny; }
        }
      }
    }

    &-layer-topology {
      background-color: transparentize($color-gray-50, 0.05);
      border-radius: $border-radius-soft;
      border: 1px solid $color-gray-200;
      color: $text-tertiary-color;
      font-size: $font-size-normal;
      font-weight: bold;
      padding-right: 20px;
      text-align: right;
      text-transform: capitalize;
    }
  }

  /* This part sets the styles only for the 'real' node details table, not applying
  them to the nodes grid, because there we control hovering from the JS.
  NOTE: Maybe it would be nice to separate the class names between the two places
  where node tables are used - i.e. it doesn't make sense that node-details-table
  can also refer to the tables in the nodes grid. */
  .details-wrapper .node-details-table {
    &-node {
      &:hover, &.selected {
        background-color: $color-white;
      }
    }
  }

  .node-control-button {
    @extend .btn-opacity;
    padding: 6px;
    margin-left: 2px;
    font-size: $font-size-small;
    color: $text-secondary-color;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: $border-radius-soft;
    &:hover {
      border-color: transparentize($color-white, 0.4);
    }
    &-pending, &-pending:hover {
      opacity: 0.2;
      border-color: transparent;
      cursor: not-allowed;
    }
  }

  .terminal {

    &-app {
      display: flex;
      flex-flow: column;
    }

    &-embedded {
      position: relative;
      /* shadow of animation-wrapper is 10px, let it fit in here without being
      overflow hiddened. */
      flex: 1;
      overflow-x: hidden;
    }

    &-animation-wrapper {
      position: absolute;
      /* some room for the drop shadow. */
      top: 10px;
      left: 10px;
      bottom: 10px;
      right: 0;
      transition: transform 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000);
      @extend .shadow-2;
    }

    &-wrapper {
      width: 100%;
      height: 100%;
      border: 0px solid $color-black;
      color: $color-gray-50;
    }

    &-header {
      @extend .truncate;
      color: $color-white;
      height: $terminal-header-height;
      padding: 8px 24px;
      background-color: $text-color;
      position: relative;
      font-size: $font-size-small;
      line-height: 28px;
      border-top-left-radius: $border-radius-soft;

      &-title {
        cursor: default;
      }

      &-tools {
        position: absolute;
        right: 8px;
        top: 6px;

        &-item, &-item-icon {
          @extend .palable;
          padding: 4px 5px;
          color: $color-white;
          cursor: pointer;
          opacity: 0.7;
          border: 1px solid transparent;
          border-radius: $border-radius-soft;

          font-size: $font-size-tiny;
          font-weight: bold;

          &:hover {
            opacity: 1;
            border-color: transparentize($color-white, 0.4);
          }
        }

        &-item-icon {
          font-size: $font-size-normal;
        }
      }
    }

    &-embedded &-inner { top: $terminal-header-height; }
    &-app &-inner { top: 0; }
    &-inner {
      cursor: text;
      font-family: $font-family-monospace;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: $color-black;
      padding: 8px;
      box-sizing: content-box;
      border-bottom-left-radius: $border-radius-soft;

      .terminal {
        background-color: transparent !important;
      }
    }

    &-status-bar {
      font-family: $font-family-regular;
      position: absolute;
      bottom: 16px;
      right: 16px;
      width: 50%;
      padding: 16px 16px;
      opacity: 0.8;
      border-radius: $border-radius-soft;

      h3 {
        margin: 4px 0;
      }

      &-message {
        margin: 4px 0;
        color: $color-white;
      }

      .link {
        font-weight: bold;
        cursor: pointer;
        float: right;
      }
    }

    &-cursor {
      color: $color-black;
      background: $color-gray-50;
    }
  }

  .terminal-inactive .terminal-cursor {
    visibility: hidden;
  }

  .metric {
    &-unit {
      padding-left: 0.25em;
    }
  }

  .show-more {
    @extend .btn-opacity;
    border-top: 1px dotted $border-light-color;
    padding: 0px 0;
    margin-top: 4px;
    text-align: right;
    cursor: pointer;
    color: $text-secondary-color;
    font-size: $font-size-small;

    &-icon {
      color: $text-tertiary-color;
      font-size: $font-size-normal;
      position: relative;
      top: 1px;
    }
  }

  .plugins {
    margin-right: 0.5em;

    &-label {
      margin-right: 0.25em;
    }

    &-plugin {
      cursor: default;
    }

    &-plugin + &-plugin:before {
      content: ', ';
    }

    &-plugin-icon {
      top: 1px;
      position: relative;
      font-size: $font-size-large;
      margin-right: 2px;
    }

    .error {
      animation: blinking 2.0s 60 $base-ease; /* blink for 2 minutes */
      color: $text-secondary-color;
    }

    &-empty {
      opacity: $text-secondary-color;
    }
  }

  .status {
    padding: 2px 12px;
    background-color: $body-background-color;
    border-radius: $border-radius-soft;
    color: $text-secondary-color;
    display: inline-block;
    opacity: 0.9;

    &-icon {
      font-size: $font-size-normal;
      position: relative;
      top: 0.125rem;
      margin-right: 0.25rem;
    }

    &.status-loading {
      animation: blinking 2.0s 150 $base-ease; /* keep blinking for 5 minutes */
      text-transform: none;
      color: $text-color;
    }
  }

  .topology-option, .metric-selector, .network-selector, .view-mode-selector, .time-control {
    font-size: $font-size-normal;
    color: $text-secondary-color;
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 0;
    }

    i {
      font-size: $font-size-tiny;
      margin-left: 4px;
      color: $color-orange-500;
    }

    &-wrapper {
      pointer-events: all;
      border-radius: $border-radius-soft;
      border: 1px solid $background-darker-color;
      display: inline-block;
      white-space: nowrap;
    }

    &-action {
      @extend .btn-opacity;
      padding: 3px 12px;
      cursor: pointer;
      display: inline-block;
      background-color: $background-color;

      &-selected, &:not([disabled]):hover {
        color: $text-darker-color;
        background-color: $background-darker-color;
      }

      &:first-child {
        border-left: none;
        border-top-left-radius: $border-radius-soft;
        border-bottom-left-radius: $border-radius-soft;
      }

      &:last-child {
        border-top-right-radius: $border-radius-soft;
        border-bottom-right-radius: $border-radius-soft;
      }
    }
  }

  .metric-selector {
    font-size: $font-size-small;
    margin-top: 6px;
  }

  .view-mode-selector, .time-control {
    margin-left: 20px;

    &-wrapper {
      pointer-events: all;
      border-color: $background-darker-secondary-color;
      overflow: hidden;
    }

    &:first-child,
    &:last-child {
      .view-mode-selector-action {
        border-radius: $border-radius-none;
      }
    }

    &-action {
      background-color: transparent;

      &-selected, &:not([disabled]):hover {
        background-color: $background-darker-color;
      }

      &:not(:last-child) {
        border-right: 1px solid $background-darker-secondary-color;
      }
    }
  }

  .time-control {
    margin-right: 20px;

    &-controls {
      align-items: center;
      justify-content: flex-end;
      display: flex;
    }

    &-spinner {
      display: inline-block;
      margin-right: 15px;
      margin-top: 3px;

      i {
        color: $text-secondary-color;
        font-size: $font-size-normal;
      }
    }

    &-info {
      @extend .blinkable;
      display: block;
      margin-top: 5px;
      text-align: right;
      pointer-events: all;
      font-size: $font-size-small;
    }
  }

  .topology-option {
    &-wrapper {
      display: inline-flex;
      flex-wrap: wrap;
      overflow: hidden;
      max-height: 27px;
      transition: max-height 0.5s 0s $base-ease;

      .topology-option-action {
        flex: 1 1 auto;
        text-align: center;
      }
    }
    
      &:last-child :hover {
      height: auto;
      max-height: calc((13px * 1.5 + 3px + 3px) * 8); /* expand to display 8 rows */
      overflow: auto;
      transition: max-height 0.5s 0s $base-ease;
    } 

    font-size: $font-size-small;

    &-action {
      &-selected {
        cursor: default;
      }
    }
  }

  .view-mode-selector-wrapper, .time-control-wrapper {
    .label { margin-left: 4px; }
    i {
      margin-left: 0;
      color: $text-secondary-color;
    }
  }

  .network-selector-action {
    border-top: 3px solid transparent;
    border-bottom: 3px solid $background-dark-color;
  }

  .warning {
    display: inline-block;
    cursor: pointer;
    border: 1px dashed transparent;
    text-transform: none;
    border-radius: $border-radius-soft;
    margin-left: 4px;

    &-wrapper {
      display: flex;
    }

    &-text {
      display: inline-block;
      color: $text-secondary-color;
      padding-left: 0.5em;
    }

    &-icon {
      @extend .btn-opacity;
    }

    &-expanded {
      margin-left: 0;
      padding: 2px 4px;
      border-color: $text-tertiary-color;
    }

    &-expanded &-icon {
      position: relative;
      top: 4px;
      left: 2px;
    }

  }

  .sidebar {
    position: fixed;
    bottom: 11px;
    left: 11px;
    padding: 5px;
    font-size: $font-size-small;
    border-radius: $border-radius-soft;
    border: 1px solid transparent;
    pointer-events: none;
    max-width: 50%;
  }

  .sidebar-gridmode {
    background-color: $color-purple-50;
    border-color: $background-darker-color;
    opacity: 0.9;
  }

  .search {
    &-wrapper {
      margin: 0 8px;
      min-width: 160px;
      text-align: right;
    }
  }

  @keyframes blinking {
    0%, 50%, 100% {
      opacity: 1.0;
    } 25% {
      opacity: 0.5;
    }
  }

  /*   
  Help panel!
   */

  .help-panel {
    z-index: $layer-modal;
    background-color: $color-white;
    @extend .shadow-2;
    display: flex;
    position: relative;

    &-wrapper {
      position: absolute;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    &-header {
      background-color: $color-blue-400;
      padding: 12px 24px;
      color: $color-white;

      h2 {
        margin: 0;
        font-size: $font-size-large;
      }
    }

    &-tools {
      position: absolute;
      top: 6px;
      right: 8px;

      i {
        @extend .btn-opacity;
        padding: 4px 5px;
        margin-left: 2px;
        font-size: $font-size-normal;
        color: $color-purple-400;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: $border-radius-soft;

        &:hover {
          border-color: transparentize($color-purple-400, 0.4);
        }
      }

    }

    &-main {
      display: flex;
      padding: 12px 36px 36px 36px;
      flex-direction: row;
      align-items: stretch;

      h2 {
        line-height: 150%;
        font-size: $font-size-large;
        color: $color-purple-400;
        padding: 4px 0;
        border-bottom: 1px solid transparentize($color-purple-400, 0.9);
      }

      h3 {
        font-size: $font-size-normal;
        color: $color-purple-400;
        padding: 4px 0;
      }

      p {
        margin: 0;
      }
    }

    &-shortcuts {
      margin-right: 36px;

      &-shortcut {
        kbd {
          display: inline-block;
          padding: 3px 5px;
          font-size: $font-size-tiny;
          line-height: 10px;
          color: $color-gray-600;
          vertical-align: middle;
          background-color: $color-white;
          border: solid 1px $color-gray-200;
          border-bottom-color: $color-gray-600;
          border-radius: $border-radius-soft;
          box-shadow: inset 0 -1px 0 $color-gray-600;
        }
        div.key {
          width: 60px;
          display: inline-block;
        }
        div.label {
          display: inline-block;
        }
      }
    }

    &-search {
      margin-right: 36px;

      &-row {
        display: flex;
        flex-direction: row;

        &-term {
          flex: 1;
          color: $text-secondary-color;
          i {
            margin-right: 5px;
          }
        }

        &-term-label {
          flex: 1;
          b {
            color: $text-secondary-color;
          }
        }
      }
    }

    &-fields {
      display: flex;
      flex-direction: column;

      &-current-topology {
        color: $color-purple-400;
      }

      &-fields {
        display: flex;
        align-items: stretch;

        &-column {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin-right: 12px;

          &-content {
            overflow: auto;
            /* 160px for top and bottom margins and the rest of the help window
            is about 160px too.
            Notes: Firefox gets a bit messy if you try and bubble
            heights + overflow up (min-height issue + still doesn't work v.well),
            so this is a bit of a hack. */
            max-height: calc(100vh - 160px - 160px - 160px);
          }
        }
      }
    }
  }

  /*   
  Zoom control
   */

  .zoom-control {
    @extend .overlay-wrapper;
    flex-direction: column;
    padding: 5px 7px 0;
    bottom: 50px;
    right: 40px;

    a:hover { border-color: transparent; }

    .rc-slider {
      margin: 5px 0;
      height: 60px;
    }
  }

  /*   
  Debug panel!
   */

  .debug-panel {
    @extend .shadow-2;
    background-color: $color-white;
    top: 80px;
    position: absolute;
    padding: 10px;
    left: 10px;
    z-index: $layer-modal;

    opacity: 0.3;

    &:hover {
      opacity: 1;
    }

    table {
      display: inline-block;
      border-collapse: collapse;
      margin: 4px 2px;

      td {
        width: 10px;
        height: 10px;
      }
    }
  }

  /*   
  Nodes grid.
   */

  .nodes-grid {
    tr {
      border-radius: $border-radius-soft;
    }

    &-label-minor {
      opacity: 0.7;
    }

    &-id-column {
      margin: -3px -4px;
      padding: 2px 4px;
      display: flex;
      div {
        flex: 1;
      }
    }

    .node-details-table-wrapper-wrapper {

      flex: 1;
      display: flex;
      flex-direction: row;
      width: 100%;

      .node-details-table-wrapper {
        margin: 0;
        flex: 1;
      }

      .nodes-grid-graph {
        position: relative;
        margin-top: 24px;
      }

      .node-details-table-node > * {
        padding: 3px 4px;
      }

      /* Keeping the row height fixed is important for locking the rows on hover. */
      .node-details-table-node, thead tr {
        height: 28px;
      }

      tr:nth-child(even) {
        background: $color-gray-100;
      }

      tbody tr {
        border: 1px solid transparent;
        border-radius: $border-radius-soft;
        cursor: pointer;
      }

      /* We fully control hovering of the grid rows from JS,
      because we want consistent behaviour between the
      visual and row locking logic that happens on hover. */
      tbody tr.selected, tbody tr.focused {
        background-color: transparentize($color-blue-400, 0.85);
        border: 1px solid $color-blue-400;
      }
    }

    .scroll-body {

      table {
        border-bottom: 1px solid $color-gray-200;
      }

      thead, tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed;
      }

      tbody:after {
        content: '';
        display: block;
        /* height of the controls so you can scroll the last row up above them
        and have a good look. */
        height: 140px;
      }

      thead {
        box-shadow: 0 4px 2px -2px transparentize($color-black, 0.84);
        border-bottom: 1px solid $color-gray-600;
      }

      tbody {
        display: block;
        overflow-y: scroll;
      }
    }
  }

  .troubleshooting-menu {
    display: flex;
    position: relative;

    &-wrapper {
      height: 100%;
      width: 100%;
      align-items: center;
      display: flex;
      justify-content: center;
      position: absolute;
    }

    &-content {
      position: relative;
      background-color: $color-white;
      padding: 20px;
      @extend .shadow-2;
      z-index: $layer-modal;
    }

    &-item {
      height: 40px;
      .soft { opacity: 0.6; }
    }

    button {
      border: 0;
      background-color: transparent;
      cursor: pointer;
      padding: 0;
      outline: 0;
    }

    button, a {
      color: $color-purple-900;

      &:hover {
        color: $text-color;
      }
    }

    i {
      width: 20px;
      text-align: center;
      margin-right: 10px;
    }

    .fa.fa-times {
      width: 25px;
    }
  }

  @media (max-width: 1330px) {
    .view-mode-selector .label { display: none; }
  }


  /**
  * Copyright (c) 2014 The xterm.js authors. All rights reserved.
  * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
  * https://github.com/chjj/term.js
  * @license MIT
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in
  * all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  * THE SOFTWARE.
  *
  * Originally forked from (with the author's permission):
  *   Fabrice Bellard's javascript vt100 for jslinux:
  *   http://bellard.org/jslinux/
  *   Copyright (c) 2011 Fabrice Bellard
  *   The original design remains. The terminal itself
  *   has been extended to include xterm CSI codes, among
  *   other features.
  */

  /**
  *  Default styles for xterm.js
  */

  .xterm {
      font-family: $font-family-monospace;
      font-feature-settings: "liga" 0;
      position: relative;
      user-select: none;
      /* stylelint-disable property-no-vendor-prefix */
      -ms-user-select: none;
      -webkit-user-select: none;
      /* stylelint-enable property-no-vendor-prefix */
  }

  .xterm.focus,
  .xterm:focus {
      outline: none;
  }

  .xterm .xterm-helpers {
      position: absolute;
      top: 0;
      /**
      * The z-index of the helpers must be higher than the canvases in order for
      * IMEs to appear on top.
      */
      /* stylelint-disable sh-waqar/declaration-use-variable */
      z-index: 10;
      /* stylelint-enable sh-waqar/declaration-use-variable */
  }

  .xterm .xterm-helper-textarea {
      /*
      * HACK: to fix IE's blinking cursor
      * Move textarea out of the screen to the far left, so that the cursor is not visible.
      */
      position: absolute;
      opacity: 0;
      left: -9999em;
      top: 0;
      width: 0;
      height: 0;
      /* stylelint-disable sh-waqar/declaration-use-variable */
      z-index: -10;
      /* stylelint-enable sh-waqar/declaration-use-variable */
      /** Prevent wrapping so the IME appears against the textarea at the correct position */
      white-space: nowrap;
      overflow: hidden;
      resize: none;
  }

  .xterm .composition-view {
      /* TODO: Composition position got messed up somewhere */
      background: ${color('black')};
      color: ${color('white')};
      display: none;
      position: absolute;
      white-space: nowrap;
      z-index: ${props => props.theme.layers.front};
  }

  .xterm .composition-view.active {
      display: block;
  }

  .xterm .xterm-viewport {
      /* On OS X this is required in order for the scroll bar to appear fully opaque */
      background-color: ${color('black')};
      overflow-y: scroll;
      cursor: default;
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
  }

  .xterm .xterm-screen {
      position: relative;
  }

  .xterm .xterm-screen canvas {
      position: absolute;
      left: 0;
      top: 0;
  }

  .xterm .xterm-scroll-area {
      visibility: hidden;
  }

  .xterm-char-measure-element {
      display: inline-block;
      visibility: hidden;
      position: absolute;
      top: 0;
      left: -9999em;
      line-height: normal;
  }

  .xterm.enable-mouse-events {
      /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */
      cursor: default;
  }

  .xterm:not(.enable-mouse-events) {
      cursor: text;
  }

  .xterm .xterm-accessibility,
  .xterm .xterm-message {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      /* stylelint-disable sh-waqar/declaration-use-variable */
      z-index: 100;
      /* stylelint-enable sh-waqar/declaration-use-variable */
      color: transparent;
  }

  .xterm .live-region {
      position: absolute;
      left: -9999px;
      width: 1px;
      height: 1px;
      overflow: hidden;
  }

  .xterm-cursor-pointer {
      cursor: pointer;
  }
`;

export default GlobalStyle;
