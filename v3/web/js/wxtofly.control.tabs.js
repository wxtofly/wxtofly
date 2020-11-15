var TabsControl = function (container, tabs, options) {

    /*
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">Messages</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
      <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
      <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
      <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
    </div>
     */

    const tabDict = {};

    let tabContent = $('<div class="tab-content"></div>');
    let nav = $('<ul class="nav nav-tabs" role="tablist"></ul>');

    container.append(nav);
    container.append(tabContent);

    this.appendTab = function (id, title, content, active = false, visible = true) {
        let navItem = $(`<li class="nav-item"></li>`);
        if (!visible) {
            navItem.css({
                'display': 'none'
            });
        }
        let navLink = $(`<a class="nav-link${active ? ' active' : ''}" id="${id}-tab" data-toggle="tab" href="#${id}" role="tab" aria-controls="${id}" aria-selected="true">${title}</a>`);
        navItem.append(navLink);
        nav.append(navItem);

        let tabPane = $(`<div class="tab-pane${active ? ' active' : ''}" id="${id}" role="tabpanel" aria-labelledby="${id}-tab"></div>`);
        if (!visible) {
            tabPane.css({
                'display': 'none'
            });
        }
        tabContent.append(tabPane);

        tabDict[id] = {
            'navLink': navLink,
            'tabPane': tabPane
        };

        this.setTabContent(id, content);
    };

    this.on = function (id, event, handler, context) {
        tabDict[id]['navLink'].on(event, { id: id }, (e) => {
            handler.call(context, {
                ...e,
                contentElement: tabDict[e.data.id]['tabPane'].children()
            });
        });
    };

    this.setTabContent = function (id, content) {
        if (typeof content === 'object') {
            tabDict[id]['tabPane'].append(content);
        }
        else if (typeof content === 'string') {
            tabDict[id]['tabPane'].html(content);
        }
    };

    this.setTabActive = function (id) {
        tabDict[id]['navLink'].tab('show');
    };

    if (tabs !== undefined) {
        for (let id in tabs) {
            this.appendTab(id, tabs[id]['title'], tabs[id]['content'], tabs[id]['active'], tabs[id]['visible']);
            if (tabs[id]['show'] !== undefined && typeof tabs[id]['show'] === 'function') {
                this.on(id, 'show.bs.tab', tabs[id]['show'], this);
            }
            if (tabs[id]['shown'] !== undefined && typeof tabs[id]['shown'] === 'function') {
                this.on(id, 'shown.bs.tab', tabs[id]['shown'], this);
            }
            if (tabs[id]['hide'] !== undefined && typeof tabs[id]['hide'] === 'function') {
                this.on(id, 'hide.bs.tab', tabs[id]['hide'], this);
            }
        }
    }

    nav.tab();
};

$.fn.tabs = function (options) {
    return new TabsControl(this, options);
};