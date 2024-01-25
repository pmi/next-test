import {APP_NAME, ComponentRegistry} from '@enonic/nextjs-adapter';
import TwoColumnLayout from './layouts/TwoColumnLayout';
import MainPage from './pages/Main';
import ChildList, {childListProcessor, getChildList} from './parts/ChildList';
import Heading from './parts/Heading';
import MovieDetails, {getMovie} from './parts/MovieDetails';
import {commonQuery, commonVariables} from './queries/common';


// You can set common query for all views here
ComponentRegistry.setCommonQuery([commonQuery, commonVariables]);

// Content type mappings



// Page mappings
ComponentRegistry.addPage(`${APP_NAME}:main`, {
    view: MainPage
});


// Layout mappings
ComponentRegistry.addLayout(`${APP_NAME}:2-column`, {
    view: TwoColumnLayout
});


// Part mappings
ComponentRegistry.addPart(`${APP_NAME}:heading`, {
    view: Heading
});

// Part mappings
ComponentRegistry.addPart(`${APP_NAME}:child-list`, {
    query: getChildList,
    processor: childListProcessor,
    view: ChildList
});

ComponentRegistry.addPart(`${APP_NAME}:movie-details`, {
    query: getMovie,
    view: MovieDetails
});

// Debug
/*
ComponentRegistry.addContentType(CATCH_ALL, {
    view: PropsView
});
*/
