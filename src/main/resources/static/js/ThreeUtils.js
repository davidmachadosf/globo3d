var ThreeUtils = {
    blnPauseRendering: false,
    init: function() {
        window['addEventListener']('resize', this['windowResize'])
    },
    render: function() {
        if (!ThreeUtils['blnPauseRendering']) {
            requestAnimationFrame(ThreeUtils['render']);
            ThreeSceneManager['renderScene']()
        }
    },
    pauseRendering: function() {
        this['blnPauseRendering'] = true
    },
    resumeRendering: function() {
        this['blnPauseRendering'] = false;
        this['render']()
    },
    windowResize: function() {
        if (typeof ThreeSceneManager === 'undefined') {
            console['error']('ThreeSceneManager must be set to a valid object, with a publicly accessible renderScene function, a renderer object and a camera object');
            return
        };
        var _0x7f63x2 = window['innerWidth'],
            _0x7f63x3 = window['innerHeight'];
        ThreeSceneManager['renderer']['setSize'](_0x7f63x2, _0x7f63x3);
        ThreeSceneManager['camera']['aspect'] = _0x7f63x2 / _0x7f63x3;
        ThreeSceneManager['camera']['updateProjectionMatrix']()
    },
    isWebGLSupported: function() {
        try {
            var _0x7f63x4 = document['createElement']('canvas');
            return !!(window['WebGLRenderingContext'] && (_0x7f63x4['getContext']('webgl') || _0x7f63x4['getContext']('experimental-webgl')))
        }
        catch (e) {
            return false
        }
    },
    loadManager: {
        arrActiveLoads: [],
        onLoadQueueComplete: null,
        loadTexture: function(_0x7f63x5, _0x7f63x6, _0x7f63x7) {
            var _0x7f63x8 = THREE['ImageUtils']['loadTexture'](_0x7f63x5, _0x7f63x6, $['proxy'](this['loadComplete'], this));
            this['arrActiveLoads']['push']({
                textureObj: _0x7f63x8,
                completeFunc: _0x7f63x7
            });
            return _0x7f63x8
        },
        loadComplete: function(_0x7f63x8) {
            var _0x7f63x9 = this['getLoadObject'](_0x7f63x8);
            if (_0x7f63x9) {
                if (typeof _0x7f63x9['completeFunc'] === 'function') {
                    _0x7f63x9['completeFunc']['call']()
                };
                if (this['arrActiveLoads']['length'] < 1) {
                    if (typeof this['onLoadQueueComplete'] === 'function') {
                        this['onLoadQueueComplete']['call']();
                        this['onLoadQueueComplete'] = null
                    }
                }
            }
        },
        getLoadObject: function(_0x7f63x8) {
            var _0x7f63xa, _0x7f63x9;
            for (_0x7f63xa = 0; _0x7f63xa < this['arrActiveLoads']['length']; _0x7f63xa++) {
                if (this['arrActiveLoads'][_0x7f63xa]['textureObj'] == _0x7f63x8) {
                    _0x7f63x9 = this['arrActiveLoads'][_0x7f63xa];
                    break
                }
            };
            if (_0x7f63x9) {
                this['arrActiveLoads'][_0x7f63xa] = null;
                this['arrActiveLoads']['splice'](_0x7f63xa, 1)
            };
            return _0x7f63x9
        }
    }
};