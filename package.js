var coreDependencies = [
    'ecmascript',
    'check',
    'svein:serrurier@1.0.0'
];

Package.describe({
    name: 'svein:serrurier-cadenas-defaults',
    version: '1.0.0',
    // Brief, one-line summary of the package.
    summary: 'A set of basic cadenas for svein:serrurier',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/sveinburne/serrurier-cadenas-defaults',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse( function( api ) {
    api.versionsFrom( '1.3.4.1' );
    api.use( coreDependencies );
    api.mainModule( 'main.js' );
});