const $ = require('qwery');
const ssm = require('simplestatemanager');
const $teamWrapper = $('.js-team-wrapper')[0];


ssm.addState({
    id: 'minWidth',
    query: '(min-width: 641px)',
    onLeave: () => {
        if ($teamWrapper && team_member_list_json && team_member_list_json.length && team_member_list_json.length > 0) {
            renderSingleColumn();
        }
    },
    onEnter: () => {
        if ($teamWrapper && team_member_list_json && team_member_list_json.length && team_member_list_json.length > 0) {
            renderTwoColumn();
        }
    },
});

function prepareTeamData() {

    if ($teamWrapper && team_member_list_json && team_member_list_json.length && team_member_list_json.length > 0) {
        const expandedTeamMemberList = team_member_list_json.map(teamMeber => expandTeamMemberData(teamMeber));
        const sortedTeamMemberList = expandedTeamMemberList.sort(compareWeight);
        return sortedTeamMemberList ? sortedTeamMemberList : [];
    }
}

function compareWeight(itemA, itemB) {
    return parseInt(itemA.weight, 10) - parseInt(itemB.weight, 10);
}

function isItemIndexEven(index) {
    return index % 2 === 0;
}

function expandTeamMemberData(teamMemberData) {
    if (!teamMemberData){
        return;
    }
    const expandedTeamMemberData = {};

    expandedTeamMemberData.name = teamMemberData[0];
    expandedTeamMemberData.surname = teamMemberData[1];
    expandedTeamMemberData.bio = teamMemberData[2];
    expandedTeamMemberData.imageUrl = teamMemberData[3].length ? teamMemberData[3]: 'https://s3-eu-west-1.amazonaws.com/pimpmycause-images/uploads/imgs/marketer-default-image.png';
    expandedTeamMemberData.position = teamMemberData[4];
    expandedTeamMemberData.weight = teamMemberData[5];

    return expandedTeamMemberData;
}

function renderTeamMember(element, teamMemberData) {

    if (!teamMemberData) {
        return;
    }

    const teamMemberElement = document.createElement('div');
    const teamMemberTemplate = `
        <div class="team__individual-wrapper">
            <img alt="${teamMemberData.name} ${teamMemberData.surname} Image" class="team__individual-image" src="${teamMemberData.imageUrl}"/>

            <div class="team__individual">
                <h2 class="team__individual-name">${teamMemberData.name} ${teamMemberData.surname}</h2>
                <h3 class="team__individual-role">${teamMemberData.position}</h3>
                <div class="team__individual-bio">
                    ${teamMemberData.bio}
                </div>
            </div>
        </div>`;

    teamMemberElement.innerHTML = teamMemberTemplate;
    element.appendChild(teamMemberElement);

}

function removeAllChildNodes(item) {
    item.innerHTML = '';
}

function renderSingleColumn() {
    console.log('onLeave renderSingleColumn')
    const sortedTeamMemberList = prepareTeamData();

    removeAllChildNodes($teamWrapper)
    sortedTeamMemberList.forEach(teamMember => renderTeamMember($teamWrapper, teamMember));
}

function createNewColumnElement(parentElement) {
    const element = document.createElement('div');
    element.classList.add('medium-6');
    element.classList.add('columns');
    parentElement.appendChild(element);

    return element;
}

function renderTwoColumn() {
    console.log('onEnter renderTwoColumn')

    const sortedTeamMemberList = prepareTeamData();

    removeAllChildNodes($teamWrapper)

    const $teamWrapperColumnOne = createNewColumnElement($teamWrapper)
    const $teamWrapperColumnTwo = createNewColumnElement($teamWrapper)

    console.log($teamWrapperColumnOne)
    console.log($teamWrapperColumnTwo)

    const evenTeamMemberList = sortedTeamMemberList.reduce((acc, item, index) => {
        if (isItemIndexEven(index)) {
            acc.push(item);
        }
        return acc;
    }, []);

    const oddTeamMemberList = sortedTeamMemberList.reduce((acc, item, index) => {
        if (!isItemIndexEven(index)) {
            acc.push(item);
        }
        return acc;
    }, []);

    evenTeamMemberList.forEach(teamMember => renderTeamMember($teamWrapperColumnOne, teamMember));
    oddTeamMemberList.forEach(teamMember => renderTeamMember($teamWrapperColumnTwo, teamMember));
}