<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class cursos extends Model
{
    //
    protected $fillable = ['id','name'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    

    public $timestamps = false;
}
