const common = (($) => {
    'use strict';

    /**
     * This is a common function.
     *
     * @since   1.0.0
     */
    const commonFunc = () => {

        // do something
    };

    /**
     * Fire events on document ready and bind other events
     *
     * @since   1.0.0
     */
    const ready = () => {
        commonFunc();
    };

    /**
     * Only expose the ready function to the world
     */
    return {
        ready: ready
    }

})(jQuery);

jQuery(common.ready);
