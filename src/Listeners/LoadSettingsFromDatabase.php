<?php namespace Fajuu\ContactButton\Listeners;
#
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
#
class LoadSettingsFromDatabase
{
	#
  protected $settings;
  #
  #
  #
  public function __construct(SettingsRepositoryInterface $settings)
  {
    #
    $this->settings = $settings;
    #
  }
  #
  #
  public function subscribe(Dispatcher $events)
  {
    #
    $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    #
  }
  #
  #
  public function prepareApiAttributes(Serializing $event)
  {
    #
    if ($event->isSerializer(ForumSerializer::class))
    {
      #
      $event->attributes['fajuu-contactbutton.buttoname'] = $this->settings->get('fajuu-contactbutton.buttoname');
      $event->attributes['fajuu-contactbutton.icon'] = $this->settings->get('fajuu-contactbutton.icon');
      $event->attributes['fajuu-contactbutton.adress'] = $this->settings->get('fajuu-contactbutton.adress');
      $event->attributes['fajuu-contactbutton.newtab'] = $this->settings->get('fajuu-contactbutton.newtab');
      #
    }
    #
  }
	#
  #
}
#