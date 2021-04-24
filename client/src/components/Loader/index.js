import $ from 'jquery';

export default function Loader() {
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1200);
    };
    return (
        <div id="loader" className="show">
            <div className="loader">{loader()}</div>
        </div>

    )
};