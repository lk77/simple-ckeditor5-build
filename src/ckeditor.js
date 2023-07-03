/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import EditorWatchdog from '@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js';

class Editor extends ClassicEditor {
}

// Plugins to include in the build.
Editor.builtinPlugins = [
    Bold,
    Essentials,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    Italic,
    Paragraph,
    Strikethrough,
    Underline,
    WordCount
];

// Editor configuration.
Editor.defaultConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            '|',
            'strikethrough',
            'underline',
            '|',
            'fontColor',
            'fontSize',
            'fontBackgroundColor',
            'fontFamily',
            '|',
            'undo',
            'redo'
        ]
    },
    language: 'fr'
};

export default {Editor, EditorWatchdog};
