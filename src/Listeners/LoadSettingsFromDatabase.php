<?php

namespace Fajuu\ContactButton\Listeners;

//
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

//
class LoadSettingsFromDatabase
{
    //
    protected $settings;

    //
    //
    //
    public function __construct(SettingsRepositoryInterface $settings)
    {
        //
        $this->settings = $settings;
        //
    }

    //
    //
    public function subscribe(Dispatcher $events)
    {
        //
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
        //
    }

    //
    //
    public function prepareApiAttributes(Serializing $event)
    {
        //
        if ($event->isSerializer(ForumSerializer::class)) {
            //
            $event->attributes['fajuu-contactbutton.label'] = $this->settings->get('fajuu-contactbutton.label');
            $event->attributes['fajuu-contactbutton.icon'] = $this->settings->get('fajuu-contactbutton.icon');
            $event->attributes['fajuu-contactbutton.url'] = $this->settings->get('fajuu-contactbutton.url');
            $event->attributes['fajuu-contactbutton.newtab'] = $this->settings->get('fajuu-contactbutton.newtab');
            //
        }
        //
    }

    //
  //
}
//
