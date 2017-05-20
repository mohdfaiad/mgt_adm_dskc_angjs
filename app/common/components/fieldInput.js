(function () {
    angular.module('managementAdminCloud').component('fieldInput', {

        bindings: {

            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
            type: '@',
            model: '=',
            readonly: '<'
        },

        controller: [

            'gridSystem',
            function (gridSystem) {

                this.gridSystem = gridSystem.toCssClasses(this.grid)
            }
        ],

        template: `
            <div class="{{ $ctrl.gridClasses }}">
                <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                <input id="{{ $ctrl.id }}" class="form-control input-sm" placeholder="{{ $ctrl.placeholder }}" 
                    type="{{ $ctrl.type }}" ng-model="$ctrl.model" ng-readonly="$ctrl.readonly"/>
            </div>   
        `
    })
})();